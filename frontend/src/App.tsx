import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Note } from './models/note';

function App() {
  // const [clickCount, setClickCount] = React.useState(0);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        // const response = await fetch('http://localhost:5000/api/notes', {
        // removed localhost portion because we added the proxy to the package.json
        const response = await fetch('/api/notes', {
          method: 'GET',
        });
        const notes = await response.json();

        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadNotes();
  }, []);

  return (
    <div className="App">
      {/* <Button onClick={() => setClickCount(clickCount + 1)}>
          Clicked {clickCount} Times
        </Button> */}
      {JSON.stringify(notes)}
    </div>
  );
}

export default App;
