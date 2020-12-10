const express = require('express');
const music = express.Router();
const Music = require('../models/music.js');


music.get('/music', (req, res) => {
    res.send('index page')
});

music.post('/', async (req, res) => {
    Music.create(req.body, (error, createdMusic) => {
        if (error) {
            res.status(400).json({error: error.message })
        }
        res.status(200).send(createdMusic)
    })
});

music.get('/', (req, res) => {
    Music.find({}, (err, foundMusic) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundMusic)
    })
});

music.delete('/:id', (req, res) => {
    Music.findByIdAndRemove(req.params.id, (err, deletedMusic) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedMusic)
    })
});

music.put('/:id', (req, res) => {
    Music.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false }, (err, updatedMusic) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedMusic)
    })
});

module.exports = music;