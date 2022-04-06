const express = require('express');
const path = require('path');

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api', (req, res) => {
    res.send(
        `<p>api return success!</p>`
    );
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});