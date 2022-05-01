const Router = require('express').Router();
const Data = require('./../db/data');

Router.get('/notes', async (req, res) => {
    try {
        Data.get().then(data => res.json(data));
        // parseData = Data.read();
        // res.send(
        //     `${parseData} \n api route /notes success`
        //     )
    } catch (err) {
        res.status(500).json(err)
    };
});

Router.post('/notes', async (req, res) => {
    try {
        Data.add().then(req => res.json(Data));
        res.send(Data)
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