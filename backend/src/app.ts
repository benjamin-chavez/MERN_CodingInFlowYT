import 'dotenv/config';
import express from 'express';

// app is basically our server
const app = express();

// Arrow Function - function without a name
app.get('/', (req, res) => {
  res.send('Hello World!!');
});

export default app;
