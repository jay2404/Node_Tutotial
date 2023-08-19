// console.log("welcoe to jaydeep jha");

//1> import Area 


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send('Good morning friend')
  })

  app.get('/about', function (req, res) {
    res.send('My name is jaydeep jha')
  })

app.listen(3000)