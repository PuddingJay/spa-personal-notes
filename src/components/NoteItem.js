import React from 'react';
import NoteItemText from './NoteItemText.js';
import NoteItemAction from './NoteItemAction.js';
import PropTypes from 'prop-types';

function NoteItem({ title, body, createdAt, id, onDelete }) {
    return (
        <div className="note-item">
            <NoteItemText id={id} title={title} body={body} createdAt={createdAt} />
            <NoteItemAction id={id} onDelete={onDelete} />
        </div>
    )
}

NoteItem.propType = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteItem