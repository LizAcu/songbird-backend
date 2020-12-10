const express = require('express');
const mongoose = require('mongoose')
// const cors = require('cors')
const PORT = 3001
const app = express();
require('dotenv').config()
const mongodbURI = process.env.MONGODBURI
console.log(mongodbURI)


//add CORS code here
// const whitelist = ['http://localhost:3000', 'http://localhost:3000/', 'http://localhost:3001', 'http://localhost:3001/']
// const corsOptions = {
  // origin: function (origin, callback) {
    // if (whitelist.indexOf(origin) !== -1) {
      // callback(null, true)
    // } else {
      // callback(new Error('Not allowed by CORS'))
    // }
  // }
// }

// app.use(cors(corsOptions));
//now i'm getting a cors error?



// var corsOptions = {
    // origin: "http://localhost:8081"
//   };

// app.use(cors(corsOptions));

//mongoose connection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})

app.use(express.json())

//controllers
const musicController = require('./controllers/music.js')
app.use('/music', musicController)

app.listen(PORT, () => {
    console.log('Connected to server port', PORT)
})