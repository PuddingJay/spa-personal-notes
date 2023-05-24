import React from 'react';
import NoteItem from './NoteItem.js';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../context/LocaleContext'

class NoteList extends React.Component {
    render() {
        return this.props.notes.length > 0 ? (
            <div className="note-list">
                {
                    this.props.notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={this.props.onDelete}
                            {...note}
                        />
                    ))
                }
            </div>
        ) : (
            <LocaleConsumer>
                {
                    ({ locale }) => {
                        return (
                            <p className="note-list__empty-message">{locale === 'id' ? 'Catatan kosong' : 'Empty Note'}</p>
                        )
                    }
                }
            </LocaleConsumer>
        )
    }
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteList;