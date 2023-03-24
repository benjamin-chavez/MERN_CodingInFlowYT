// SHIFT ALT O
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import LoginModal from './components/LoginModal';
import NavBar from './components/NavBar';
import NotesPageLogedOutView from './components/NotesPageLogedOutView';
import NotesPageLoggedInView from './components/NotesPageLoggedInView';
import SignUpModal from './components/SignUpModal';
import { User } from './models/user';
import * as NotesApi from './network/notes_api';
import styles from './styles/NotesPage.module.css';

function App() {
  const [loggedInUser, setLogedInUser] = useState<User | null>(null);

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await NotesApi.getLoggedInUser();
        setLogedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLoggedInUser();
  }, []);

  return (
    <>
      <NavBar
        loggedInUser={loggedInUser}
        onLoginClicked={() => setShowLoginModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onLogoutSuccessful={() => setLogedInUser(null)}
      />
      <Container className={styles.notesPage}>
        <>
          {loggedInUser ? <NotesPageLoggedInView /> : <NotesPageLogedOutView />}
        </>
      </Container>
      {showSignUpModal && (
        <SignUpModal
          onDismiss={() => setShowSignUpModal(false)}
          onSignUpSuccessful={(user) => {
            setLogedInUser(user);
            setShowSignUpModal(false);
          }}
        />
      )}

      {showLoginModal && (
        <LoginModal
          onDismiss={() => setShowLoginModal(false)}
          onLoginSuccessful={(user) => {
            setLogedInUser(user);
            setShowLoginModal(false);
          }}
        />
      )}
    </>
  );
}

export default App;
