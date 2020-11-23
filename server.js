const express = require('express')
const server = express()
const port = 4000
const profiles = require("./matchfunction")
const loginControl = require('./controller/loginControl')


server.post('/login', loginControl)


server.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })