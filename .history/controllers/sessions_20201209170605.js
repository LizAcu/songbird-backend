const bcrypt = require('bcrypt')
// const { response } = require('express')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/user', (req, res) => {
    res.render({ currentUser: req.session.currentUser })
})

sessions.post('/', (req, res) => {


    User.findOne({ username: req.body.username }, (err, foundUser) => {
        // if(err) {
            // console.log(err)
            // const json = {"message":"Oops, the database encountered a problem!" }
            // const obj = JSON.parse(json)
            // res.json(obj)
        // }
        //  else 
         if (!foundUser) {
            //write an object for what the response should look like
            const jsonObject = {"message":"Sorry, no user found."}
            // 'no user found ' in message
            //empty object sendback 
            //400 status, then res.json(resopnseOBject)
            //do sane for line 17
            res.status(404).json({})
        } else {

            if (bcrypt.compareSync(req.body.password, foundUser.password)) {

            req.session.currentUser = foundUser
            // response has to be json
            res.status(200).json({"message":"successfully logged in"})

        }
        //  else {
            // res.send('gibberish password does not match')

        // }
        
        }
    })
})

// sessions.delete('/', (req, res) => {
    // req.session.destroy(() => {
        // res.redirect('/')
    // })
// })

module.exports = sessions