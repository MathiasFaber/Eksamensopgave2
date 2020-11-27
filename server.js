/*const express = require('express')
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
server.get('/user2', ensureToken,  protectedCon"troller,(req, res)=>{
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


server.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })


  // overvej at inkluder jwt token anyways
  */
 //fs.writefilesync (lav en variabel der henter noget fra input feltet når en bruger oprettes, for at ligge den i en JSON fil.)
// fx var jsonstring = queryselector...
//working with JSON website
/*
const form = document.get

document.getElementById("SignedUp").addEventListener("click", function() {
  document.querySelector('#username').nodeValue = 
});

var jsonstring = document.querySelector()

fs.writefilesync()

const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://github.com/MathiasFaber/Eksamensopgave2/blob/main/localStorage.JSON';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const localStorage = request.response;
    populateHeader(localStorage);
    showHeroes(localStorage);
}

function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
    header.appendChild(myPara);
}
function showHeroes(obj) {
    const heroes = obj['members'];
        
    for (let i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
          
      const superPowers = heroes[i].powers;
      for (let j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
*/


//for loop i et for loop: hvis localstorage.value på indeks(det indeks hvor deres id står)
// Kræver at man altid har sit eget navn (eller id) i sit like ID, så man kan loope igennem og se, hvis begge navne er i begge id, matcher de. 

var matches = [];


function match (){

    for (i = 0; i < possibleMatch.length; i++){
        for (j = i+1; j < possibleMatch2.length; j++){
            if (possibleMatch[i] == possibleMatch2[j]){
                matches.push(possibleMatch[i] + " & " +  possibleMatch2[i] + " is a match")
                break;
            }
        }
    }
    return matches;
    
}
console.log(match())

/* 
var fs = require('fs');

var data = {}
data.table = []

localStorage.getItem()


for (i=0; i <26 ; i++){
   var obj = {
       id: i,
       square: i * i
   }
   data.table.push(obj)
}


localStorage.getItem

fs.writeFile ("likearrays.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
*/




//https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files!!!!!!!
// se evt http forelæsning
// hvis du ikke bruger express server, så skriv et enormt langt afsnit om hvordan man ville have brugt det.!!
// Brug evt det her til at lave server requests: https://developers.onelogin.com/api-docs/1/login-page/login-user-via-api