import { useState, useEffect } from 'react';

const useNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, []);


    return { notes, setNotes };
}

export default useNotes;