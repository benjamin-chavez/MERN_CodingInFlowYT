import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { Note } from './models/note';
import { Note as NoteModel } from './models/note';
import Note from './components/Note';
import styles from './styles/NotesPage.module.css';

function App() {
  // const [clickCount, setClickCount] = React.useState(0);

  // const [notes, setNotes] = useState<Note[]>([]);
  const [notes, setNotes] = useState<NoteModel[]>([]);

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
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* <Button onClick={() => setClickCount(clickCount + 1)}>
          Clicked {clickCount} Times
        </Button> */}
        {/* {JSON.stringify(notes)} */}

        {notes.map((note) => (
          // <Note note={note} key={note._id} />
          <Col key={note._id}>
            <Note note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
