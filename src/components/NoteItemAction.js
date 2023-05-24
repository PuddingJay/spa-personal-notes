import React from "react";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

function NoteItemAction({ id, onDelete }) {
    return <button className="note-item__delete-button" onClick={() => onDelete(id)}><FaTrash /></button>
}

NoteItemAction.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteItemAction;