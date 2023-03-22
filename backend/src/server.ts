import express from 'express';

// app is basically our server
const app = express();
const port = 5000;

// Arrow Function - function without a name
app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
