const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/pageOne', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/pageOne.html'))
);

app.get('/pageTwo', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/pageTwo.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
