const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Patrick's Express App</h1>`);
});

app.get('/patrick', (req, res) => {
  res.send(`<h1>This is a top secret endpoint</h1>`);
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});