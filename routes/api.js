const Api = require('express').Router();
const data = require('./../db/data');

Api.get('/api/notes', async (req, res) => {
    try {
        data.get().then(data => res.json(data));
    } catch (err) {
        res.status(500).json(err)
    };
});

Api.post('/api/notes', async (req, res) => {
    try {
        data.add().then(req => res.json(data));
        res.send(data)
    } catch (err) {
        res.status(500).json(err)
    };
});

Api.delete('/api/notes/:id', async (req, res) => {
    try {
        data.delete(req.params.id).then(() => res.json({ ok: true }));
    } catch (err) {
        res.status(500).json(err)
    };
});

module.exports = Api;