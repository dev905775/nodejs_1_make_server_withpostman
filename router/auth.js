// const { router } = require('express');
const express = require('express');
const router = express.Router();

// require('../db/conn');
// const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('Home Page !!!, Hello world from the server router js');    
});

// app.get('/', (req, res) => {
//     res.send('Home Page!!!')
// })

router.post('/register', (req, res) => {

    // const { name, email, phone, work, password, cpassword } = req.body

    // if( !name || !email || !phone || !work || !password || !cpassword ){
    //     return res.status(422).json({ error: "Plz filled the field properly "});
    // }
    // User.findOne({ email: email })
    // .then((userExist) => {
    //     if(userExist){
    //         return res.status(422).json({ error: "Email already Exist" });
    //     }
    //     const user = new User({ name, email, phone, work, password, cpassword });

    //     user.save().then(() => {
    //         res.status(201).json({ message: "user registered successfuly" });
    //     }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
    // }).catch(err => { console.log(err); });

    // console.log(req.body.name);
    // console.log(req.body.email);

    console.log(req.body);  
    res.json({ message: req.body }); 

    // res.send("mera register page");
});

module.exports = router;