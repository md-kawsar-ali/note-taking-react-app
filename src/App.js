import React from 'react';
import AddNote from './components/AddNote/AddNote';
import Notes from './components/Notes/Notes';
import useNotes from './hooks/useNotes';

function App() {
  const { notes, setNotes } = useNotes();

  return (
    <section className='container'>
      <h1 className='text-center fw-bold my-5 text-uppercase'>Note Taking App</h1>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-5">
          <AddNote notes={notes} setNotes={setNotes} />
        </div>

        <div className="col-lg-6">
          <Notes notes={notes} setNotes={setNotes} />
        </div>
      </div>
    </section>
  );
}

export default App;
