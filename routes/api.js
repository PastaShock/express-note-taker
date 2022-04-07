const router = require('express').Router();

const req = require('express/lib/request');
const res = require('express/lib/response');
const data = require('../db/db');

router.get('/notes', (req, res) => {
    try {
        data.get().then(notes => res.json(notes));
    } catch (err) {
        res.status(500).json(err)
    };
});

router.post('/notes', (req, res) => {
    try {
        data.add().then(note => res.json(note));
    } catch (err) {
        res.status(500).json(err)
    };
});

router.delete('/notes:id', (req, res) => {
    try {
        data.delete(req.params.id).then(() => res.json({ ok: true }));
    } catch (err) {
        res.status(500).json(err)
    };
});