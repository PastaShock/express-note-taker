
const Router = require('express').Router();
const UUID = require('uuidv4');
const Data = require('./../db/data');
const db = require('../db/db.json')
const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const newNote = body;
    // console.log( UUID.uuid() );
    newNote.id = UUID.uuid();
    // console.log(newNote)
    notesArray.push(newNote);
    console.log(notesArray)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 4)
    );
    return newNote;
}

Router.get('/notes', async (req, res) => {
    try {
        Data.get().then(data => res.json(data));
    } catch (err) {
        res.status(500).json(err)
    };
});

Router.post('/notes', async (req, res) => {
    try {
        // console.log(uuid.uuid())
        // Data.add(req).then(req => res.json(data));
        const newNote = createNewNote(req.body, db)
        res.json(newNote);
    } catch (err) {
        res.status(500).json(err)
    };
});

Router.delete('/notes/:id', async (req, res) => {
    try {
        Data.delete(req.params.id).then(() => res.json({ ok: true }));
    } catch (err) {
        res.status(500).json(err)
    };
});

module.exports = Router;