//https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files!!!!!!!
// se evt http forelæsning
// hvis du ikke bruger express server, så skriv et enormt langt afsnit om hvordan man ville have brugt det.!!
// Brug evt det her til at lave server requests: https://developers.onelogin.com/api-docs/1/login-page/login-user-via-api


// dette er et udkast, fra en server der fungerer
const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
var fs = require('fs');

app.use(cors());
app.use(bodyParser.json());

// Kan dette bruges til at oprette en bruger i JSON fil?
/*
const user = {
  "username": body.username,
  "password" : body.password,
  "phone" : body.phone,
  "city" : body.city,
  "ZIP" : body.zip,
  "adress" : body.adress,
  "Email": body.email,
  "Gender" : body.gender
}
*/
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
})


app.get('/', (req, res)=> {
    let data = 'Get request virker'
    let dataAsString = JSON.stringify(data);
    res.send(dataAsString);
})

// Ved at sætte noget ind i input feltet på html siden, og trykke submit, gemmes dataen i en JSON fil. 
app.post('/', (req, res)=> {
    let reqData = req.body;
    // https://attacomsian.com/blog/nodejs-write-json-object-to-file save a class to json?
    console.log('Test for at se, om API bliver triggered')
    console.log(reqData)
    fs.writeFileSync("storage.JSON", JSON.stringify(reqData, null, 2), {flag: 'a+'});
    //console.log(reqData);
    res.send(JSON.stringify({besked: 'Her oprettes en bruger, dette er hans navn:', reqData}));
})


app.listen(port, console.log(port));
