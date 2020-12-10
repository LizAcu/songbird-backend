const express = require('express')
const music = express.Router();
const Music = require('../models/music.js')


music.get('/', (req, res) => {
    res.send('index')
})

music.post('/', async (req, res) => {
    Music.create(req.body, (error, createdMusic) => {
        if (error) {
            res.status(400).json({error: error.message })
        }
        res.status(200).send(createdMusic)
    })
})

music.get('/', (req, res) => {
    Music.find({}, (err, foundMusic) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundMusic)
    })
})

module.exports = music;