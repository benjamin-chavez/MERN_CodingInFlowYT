import { Container } from 'react-bootstrap';
import NotesPageLogedOutView from '../components/NotesPageLogedOutView';
import NotesPageLoggedInView from '../components/NotesPageLoggedInView';
import { User } from '../models/user';
import styles from '../styles/NotesPage.module.css';

interface NotesPageProps {
  loggedInUser: User | null;
}

const NotesPage = ({ loggedInUser }: NotesPageProps) => {
  return (
    <Container className={styles.notesPage}>
      <>
        {loggedInUser ? <NotesPageLoggedInView /> : <NotesPageLogedOutView />}
      </>
    </Container>
  );
};
export default NotesPage;
