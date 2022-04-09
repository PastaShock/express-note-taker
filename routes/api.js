const router = require('express').Router();

const req = require('express/lib/request');
const res = require('express/lib/response');
const data = require('../db/data');

router.get('api/notes', (req, res) => {
    try {
        data.get().then(data => res.json(data));
    } catch (err) {
        res.status(500).json(err)
    };
});

router.post('/api/notes', (req, res) => {
    try {
        data.add().then(data => res.json(data));
    } catch (err) {
        res.status(500).json(err)
    };
});

router.delete('/api/notes:id', (req, res) => {
    try {
        data.delete(req.params.id).then(() => res.json({ ok: true }));
    } catch (err) {
        res.status(500).json(err)
    };
});

module.exports = router;