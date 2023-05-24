import React from 'react';
import { showFormattedDate } from '../utils/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function NoteItemText({ id, title, body, createdAt }) {

    return (
        <div className="note-item__Text">
            <h3 className="note-item__title"> <Link to={`/detail/${id}`}> {title}</Link> </h3>
            <p className="note-item__date"> {showFormattedDate(createdAt)} </p>
            <p className="note-item__body"> {body} </p>
        </div>
    );
}

NoteItemText.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}
export default NoteItemText;