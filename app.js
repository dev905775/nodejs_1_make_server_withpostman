const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const nodemon = require("nodemon");
// const res = require('express/lib/response');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

const PORT = process.env.PORT;


//new
// link the router files to make route
app.use(require('./router/auth'));

// Middleware
const middleware = (req, res, next) => {
    console.log('Hello my Middleware');
    next();
}
// middleware();


app.get('/', (req, res) => {
    res.send('Home Page!!!, app.js');
});

app.get('/about', middleware, (req, res) => {
    console.log('Hello my About');
    res.send('About Page!!!');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page!!!');
});

// app.get('/users', (req ,res) => {
//     res.send('Users Page');
// })

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});