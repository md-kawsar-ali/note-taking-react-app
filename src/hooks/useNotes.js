import { useState, useEffect } from 'react';

const useNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const notes = [
            {
                _id: 1,
                title: 'Creating React App',
                description: 'Creating react app using node js, express js and react js'
            },
            {
                _id: 2,
                title: 'Creating Node App',
                description: 'Creating react app using node js, express js and react js'
            },
            {
                _id: 3,
                title: 'Creating Express App',
                description: 'Creating react app using node js, express js and react js'
            },
            {
                _id: 4,
                title: 'Creating Frontend App',
                description: 'Creating react app using node js, express js and react js'
            },
            {
                _id: 5,
                title: 'Creating Backend App',
                description: 'Creating react app using node js, express js and react js'
            }
        ];

        setNotes(notes);
    }, []);


    return { notes, setNotes };
}

export default useNotes;