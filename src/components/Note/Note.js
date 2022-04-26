import React, { useState } from 'react';
import './Note.css';
import Trash from './../../images/trash.png';
import Edit from './../../images/edit.png';
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';

const Note = (props) => {
    // Props Destructuring
    const { _id, title, description } = props.note;
    const { handleDelete, handleEdit } = props;

    // Visibility States
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);

    // Form Input State
    const [titleInput, setTitleInput] = useState(title);
    const [descriptionInput, setDescriptionInput] = useState(description);

    // Handle Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle Form Input
    const handleTitle = (e) => {
        setTitleInput(e.target.value);
    }

    const handleDescription = (e) => {
        setDescriptionInput(e.target.value);
    }

    // Handle Edit Note
    const handleNoteEdit = (e) => {
        e.preventDefault();

        const updatedNote = {
            title: titleInput,
            description: descriptionInput
        }

        fetch(`http://localhost:5000/notes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        })
            .then(res => res.json())
            .then(() => {
                handleEdit(_id, updatedNote);
                handleClose();
            })
    }

    return (
        <>
            <div className={`note ${visible ? 'visible' : ''}`}>
                <div className="d-flex justify-content-between align-items-center" style={{ background: '#181729' }}>
                    <h3 onClick={() => setVisible(!visible)}>{title}</h3>
                    {
                        visible && <>
                            <button className='me-1' onClick={() => handleDelete(_id)} title="Delete Note">
                                <img src={Trash} alt='Delete note' />
                            </button>

                            <button onClick={handleShow}
                                title="Edit Note">
                                <img src={Edit} alt='Edit note' />
                            </button>
                        </>
                    }
                </div>
                <p className={visible ? 'visible' : ''}>{description}</p>
            </div>

            <Modal className="edit-note" show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Edit Note</Modal.Title>
                    <CloseButton onClick={handleClose} variant="white" />
                </Modal.Header>

                <Modal.Body className="p-0">
                    <Form onSubmit={handleNoteEdit} className="add-note">
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Note Title</Form.Label>
                            <Form.Control onChange={handleTitle} value={titleInput} type="text" placeholder="Title here" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Write Your Note</Form.Label>
                            <Form.Control onChange={handleDescription} value={descriptionInput} placeholder="Write Your Note" as="textarea" rows={3} required />
                        </Form.Group>
                        <Button className='btn-theme' type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Note;