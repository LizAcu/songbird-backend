const express = require('express')
const music = express.Router();

music.get('/', (req, res) => {
    res.send('index')
})

module.exports = music;