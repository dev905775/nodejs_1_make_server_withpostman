const express = require('express')
const res = require('express/lib/response')
const app = express()

//new
// link the router files to make route
app.use(require('./router/auth'));




app.get('/', (req, res) => {
    res.send('Home Page!!!')
})

// app.get('/users', (req ,res) => {
//     res.send('Users Page')
// })

app.listen(3000)