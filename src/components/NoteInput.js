import React from "react";
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../context/LocaleContext'

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            title: '',
        }

        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxTitle = 50;
        this.setState(() => {
            return {
                title: event.target.value.slice(0, maxTitle),
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <LocaleConsumer>
                {
                    ({ locale }) => {
                        return (
                            <div className="note-input">
                                <h2>{locale === 'id' ? 'Buat Catatan' : 'Take Notes'}</h2>
                                <form onSubmit={this.onSubmitEventHandler}>
                                    <p className="note-input__title__max-title">{locale === 'id' ? 'Sisa Karakter: ' : 'Character Remaining: '} {50 - this.state.title.length}</p>
                                    <input type="text" required placeholder={locale === 'id' ? 'Isi Judul Note ...' : 'Fill in the Title of Your Note ...'} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                                    <textarea type="text" required placeholder={locale === 'id' ? 'Isi catatannya ...' : 'Fill in the Content of Your Note ...'} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                                    <button type="submit"> {locale === 'id' ? 'Buat' : 'Add'} </button>
                                </form>
                            </div>
                        )
                    }
                }
            </LocaleConsumer>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;