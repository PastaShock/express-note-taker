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
    res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.get('/api/note/:id', (req, res) => {
    res.json(`data: true`);
});

app.post('/api/note/:id', (req, res) => {
    res.send(
        `data`
    );
});

app.get('/api/user', (req, res) => {
    res.send(
        `data`
    );
});

app.get('/api/user', (req, res) => {
    res.send(
        `data`
    );
});

app.get('/api/user', (req, res) => {
    res.send(
        `data`
    );
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});