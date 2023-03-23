import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
// import NoteModel from './models/note';
import userRoutes from './routes/users';
import notesRoutes from './routes/notes';
import morgan from 'morgan';
import createHttpError, { isHttpError } from 'http-errors';
import session from 'express-session';
import env from './util/validateEnv';
import MongoStore from 'connect-mongo';

// app is basically our server
const app = express();

// logging middleware
app.use(morgan('dev'));

// So that express can receive json bodies
app.use(express.json());

// Express Session Middleware (after json body, but before routes)
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({ mongoUrl: env.MONGO_CONNECTION_STRING }),
  })
);

app.use('/api/users', userRoutes);
app.use('/api/notes', notesRoutes);

// Arrow Function - function without a name
// app.get('/', async (req, res, next) => {
//   // res.send('Hello World!!');

//   try {
//     // throw Error('Baszinga!');
//     const notes = await NoteModel.find().exec();
//     res.status(200).json(notes);
//   } catch (error) {
//     next(error);
//   }
// });

// app.get('/', (req: Request, res: Response) => {
//   // This will run whenever the route gets hit
//   console.log(add(5, 3));
//   res.send('Hello World!');
// });

// MIDDLEWARE:
// UNKNOW ENDPOINT MIDDLEWARE
app.use((req, res, next) => {
  // next(Error('Endpoint not found'));

  // Using the http-errors package:
  next(createHttpError(404, 'Endpoint not found'));
});

// ERROR HANDLING MIDDLEWARE:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occured';
  let statusCode = 500;

  // if (error instanceof Error) errorMessage = error.message;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  // res.status(500).json({ error: errorMessage });
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
