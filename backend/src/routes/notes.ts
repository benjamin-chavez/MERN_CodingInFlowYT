import express from 'express';
import * as NotesController from '../controllers/notes';

const router = express.Router();

// Arrow Function - function without a name
// app.get('/', NotesController.getNotes);
router.get('/', NotesController.getNotes); // <= UPDATE `app` TO `router` BECAUSE WE CREATED TEH ROUTER ABOVE^
router.get('/:noteId', NotesController.getNote);
router.post('/', NotesController.createNotes);
router.patch('/:noteId', NotesController.updateNote);
router.delete('/:noteId', NotesController.deleteNote);

// app.get('/', (req: Request, res: Response) => {
//   // This will run whenever the route gets hit
//   console.log(add(5, 3));
//   res.send('Hello World!');
// });

export default router;
