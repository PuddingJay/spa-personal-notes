import React from 'react';
// import { addNote } from '../utils/local-data';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const navigate = useNavigate();

    async function onAddContactHandler(title, body) {
        await addNote(title, body);
        navigate('/');
    }

    return (
        <div className="note-app__body">
            <NoteInput addNote={onAddContactHandler} />
        </div>
    )
}

export default AddPage;