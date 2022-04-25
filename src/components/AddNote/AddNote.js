import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddNote.css';

const AddNote = ({ notes, setNotes }) => {
    const handleAddNote = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const id = notes?.length + 1;

        const newNote = {
            _id: id,
            title,
            description
        }

        const newNotes = [...notes, newNote];
        setNotes(newNotes);

        e.target.reset();
    }

    return (
        <Form onSubmit={handleAddNote} className="add-note">
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Note Title</Form.Label>
                <Form.Control name="title" type="text" placeholder="Title here" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Write Your Note</Form.Label>
                <Form.Control name="description" placeholder="Write Your Note" as="textarea" rows={3} required />
            </Form.Group>
            <Button className='btn-theme' type="submit">
                Add Note
            </Button>
        </Form>
    );
};

export default AddNote;