import React from 'react';
import { useParams } from 'react-router-dom';
import NoteItemText from '../components/NoteItemText';
import { getNote } from '../utils/network-data';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={(id)} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: [],
            load: true,
        };
    }

    async componentDidMount() {
        const { data } = await getNote(this.props.id);
        setTimeout(() => {
            this.setState(() => {
                return {
                    note: data,
                    load: false,
                }
            })
        }, 300)
    }

    render() {
        if (this.state.load) {
            return (
                <Loading />
            )
        }
        if (this.state.note === null) {
            return <p>Note is not found!</p>;
        }

        return (
            <div className="detail-page__card">
                <NoteItemText {...this.state.note} />
            </div>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;