const express = require('express')
const server = express()
const port = 4000
const possibleMatch = require("./matchfunction")
//const loginControl = require('./controller/loginControl')
const match = require('./matchfunction')

// Find ud af at hente data fra localstorage
server.post('/possibleMatch',(req, res)=>{
  res.send(window.localStorage.getItem('taskList'))
})

// Lav disse post request, så den opretter en bruger (Muligvis hvis man kan pushe det her ind i local storage? idk)
server.get('/user2', /*ensureToken,  protectedCon"troller,*/ (req, res)=>{
  res.send("Ny bruger tilføjet: " + possibleMatch);
})

/*
//lav de her get requests om til at, man skal hente personer som er oprettet i systemet fra local storage.
//Dette get request skal altså gøre sådan, at de vises på skærmen, så man enten kan like eller dislike personerne. 
//Ensuretoken og protectedcontroller tjekker for JWT token, så det bør nok udelades. 

server.get('/user1', ensureToken,  protectedController, (req, res)=> {
  res.send(HardUser[0]);
})

// delete requested skal slette en bruger fra local storage.
server.delete('/user2delete', ensureToken,  protectedController, (req, res)=>{
  res.send('Har slettet:' + " " + HardUser[1].name);
})

*/
server.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })


  // overvej at inkluder jwt token anyways
