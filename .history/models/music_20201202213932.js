const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    title: { type: String }, //why do i get an error where it doesnt read title when i require these?
    artist: { type: String },
    album: { type: String },
    album_cover: { type: String },
    likes: { type: Number, default: 0}
});



module.exports = mongoose.model('Music', musicSchema);

