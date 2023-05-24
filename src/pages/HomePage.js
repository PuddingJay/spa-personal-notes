import React from 'react';
import NoteList from '../components/NoteList';
import PropTypes from 'prop-types';
import { deleteNote, getActiveNotes } from '../utils/network-data';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { LocaleConsumer } from '../context/LocaleContext'
import Loading from '../components/Loading';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            keyword: props.defaultKeyword || '',
            load: true,
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getActiveNotes();

        setTimeout(() => {
            this.setState(() => {
                return {
                    notes: data,
                    load: false,
                }
            })
        }, 300)
    }

    async onDeleteHandler(id) {
        await deleteNote(id);

        const { data } = await getActiveNotes();
        this.setState(() => {
            return {
                notes: data,
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const search = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        });

        if (this.state.load) {
            return (
                <Loading />
            )
        }
        return (
            <LocaleConsumer>
                {
                    ({ locale }) => {
                        return (
                            <div className='note-app__body'>
                                <SearchBar searchText={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                                <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
                                <NoteList notes={search} onDelete={this.onDeleteHandler} />
                            </div>
                        )
                    }
                }
            </LocaleConsumer>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}
export default HomePageWrapper;