const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const cors = require('cors');

const app = express();

//add CORS code here
// var corsOptions = {
    // origin: "http://localhost:8081"
//   };
  
// app.use(cors(corsOptions));
  


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true
}));

app.get('/', (req, res) => {
    res.json ({ message: "Welcome to the jungle"})
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log('Connected to server port', PORT)
})