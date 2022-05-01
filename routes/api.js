const Router = require('express').Router();
const UUID = require('uuidv4');
const Data = require('./../db/data');
const db = require('../db/db.json')
const fs = require('fs');
const path = require('path');

Router.get('/notes', async (req, res) => {
    try {
        console.log(`GET: ${Data.get()}`);
        Data.get().then(data => res.json(data));
    } catch (err) {
        res.status(500).json(err)
    };
});

Router.post('/notes', async (req, res) => {
    try {
        console.log('POST: ', JSON.stringify(req.body));
        Data.add(req.body).then(req => res.json(req));
    } catch (err) {
        res.status(500).json(err)
    };
});

Router.delete('/notes/:id', async (req, res) => {
    try {
        console.log('DELETE: ', req.params.id);
        Data.delete(req.params.id).then(() => res.json({ ok: true }));
    } catch (err) {
        res.status(500).json(err)
    };
});

module.exports = Router;