import React, { useState } from 'react';
import './Note.css';
import Trash from './../../images/trash.png';

const Note = (props) => {
    const [visible, setVisible] = useState(false);
    const { _id, title, description } = props.note;
    const { handleDelete } = props;


    return (
        <div className={`note ${visible ? 'visible' : ''}`}>
            <div className="d-flex justify-content-between align-items-center" style={{ background: '#181729' }}>
                <h3 onClick={() => setVisible(!visible)}>{title}</h3>
                <button onClick={() => handleDelete(_id)}>
                    <img src={Trash} alt='Delete note' />
                </button>
            </div>
            <p className={visible ? 'visible' : ''}>{description}</p>
        </div>
    );
};

export default Note;