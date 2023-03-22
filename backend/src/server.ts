/**
 * server.ts FILE BEFORE SEPARATING THE APP CODE WITH THE app.ts FILE
 */
// import 'dotenv/config';
// import env from './util/validateEnv';
// import mongoose from 'mongoose';
// import express from 'express';
// // app is basically our server
// const app = express();

// // Arrow Function - function without a name
// app.get('/', (req, res) => {
//   res.send('Hello World!!');
// });

// // const port = process.env.PORT; // <= Before validateEnv
// const port = env.PORT;

// mongoose
//   // .connect(process.env.MONGO_CONNECTION_STRING!) // <= Before validateEnv
//   .connect(env.MONGO_CONNECTION_STRING)
//   .then(() => {
//     console.log('Mongoose Connected');

//     app.listen(port, () => {
//       console.log('Server running on port: ' + port);
//     });
//   })
//   .catch(console.error);

/**
 * server.ts FILE AFTER SEPARATING THE APP CODE WITH THE app.ts FILE
 */
import app from './app';
import env from './util/validateEnv';
import mongoose from 'mongoose';

// const port = process.env.PORT; // <= Before validateEnv
const port = env.PORT;

mongoose
  // .connect(process.env.MONGO_CONNECTION_STRING!) // <= Before validateEnv
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose Connected');

    app.listen(port, () => {
      console.log('Server running on port: ' + port);
    });
  })
  .catch(console.error);
