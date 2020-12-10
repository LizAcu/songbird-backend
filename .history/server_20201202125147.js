const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();

const mongodbURI = process.env.MONGODBURI

//add CORS code here
// var corsOptions = {
    // origin: "http://localhost:8081"
//   };

// app.use(cors(corsOptions));

//mongoose connection
mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json ({ message: "Welcome to the jungle"})
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log('Connected to server port', PORT)
})