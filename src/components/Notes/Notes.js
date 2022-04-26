import React from 'react';
import Note from './../Note/Note';

const Notes = ({ notes, setNotes }) => {

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`http://localhost:5000/notes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(() => {
                    const remaining = notes.filter(note => note._id !== id);
                    setNotes(remaining);
                })
        }
    }

    if (!notes.length) {
        return <h2 className='text-center' style={{ color: '#dedede' }}>No Notes Found!</h2>;
    }

    return (
        <div>
            {
                notes?.map(note => <Note key={note._id} note={note} handleDelete={handleDelete} />)
            }
        </div>
    );
};

export default Notes;