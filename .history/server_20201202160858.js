const express = require('express');
const mongoose = require('mongoose')
const PORT = 8000
const app = express();
const mongodbURI = process.env.MONGODBURI
require('dotenv').config()

//add CORS code here
// var corsOptions = {
    // origin: "http://localhost:8081"
//   };

// app.use(cors(corsOptions));

//mongoose connection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

app.use(app.router)
const musicController = require('./controllers/music.js')
app.use('/music', musicController)

app.listen(PORT, () => {
    console.log('Connected to server port', PORT)
})