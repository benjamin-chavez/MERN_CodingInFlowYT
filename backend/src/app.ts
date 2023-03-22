import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import NoteModel from './models/note';

// app is basically our server
const app = express();

// Arrow Function - function without a name
app.get('/', async (req, res, next) => {
  // res.send('Hello World!!');

  try {
    // throw Error('Baszinga!');
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
});

// app.get('/', (req: Request, res: Response) => {
//   // This will run whenever the route gets hit
//   console.log(add(5, 3));
//   res.send('Hello World!');
// });

// MIDDLEWARE:
// UNKNOW ENDPOINT MIDDLEWARE
app.use((req, res, next) => {
  next(Error('Endpoint not found'));
});

// ERROR HANDLING MIDDLEWARE:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occured';
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
