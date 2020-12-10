const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String},
    album: { type: String },
    album_cover: { type: String },
    likes: { type: Number, default: 0}
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music