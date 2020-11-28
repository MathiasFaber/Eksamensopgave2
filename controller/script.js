// Dette er et udkast fra en controller som fungerer med en server

/*
let h1Left = document.getElementById('h1left');
let h1Right = document.getElementById('h1right');
let inputLeft = document.getElementById('inputleft');
let inputRight = document.getElementById('inputright');
let submitLeft = document.getElementById('submitleft');
let submitRight = document.getElementById('submitright');
let h1Down = document.getElementById('h1down');
let submitDown = document.getElementById('submitdown');
*/

let cp = document.getElementById('create');
let username = document.getElementById('username');
let phone = document.getElementById('phone');
//let textonpage = document.getElementById('text');



// Ved at sætte noget ind i input feltet på html siden, og trykke submit, gemmes dataen i en JSON fil. 
cp.addEventListener('click', ()=> {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json"

    // Variabler som henter alle inputfelternes id, så vi kan arbejde med de inputs brugeren giver os.
    const name = document.getElementById('username');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    const zip = document.getElementById('zip');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const password = document.getElementById('password');


    var values = [];
    // Her pushes dataen som brugeren har indtastet ind i et array, sammen med den tilhørende key (fx username)
    values.push({
        "username" : name.value, 
        "phone" : phone.value,
        "city" : city.value,
        "zip" : zip.value,
        "address" : address.value,
        "email" : email.value,
        "password" : password.value
    });
    /*
    values.push({"phone" : phone.value});
    values.push({"city" : city.value});
    values.push({"zip" : zip.value});
    values.push({"address" : address.value});
    values.push({"email" : email.value});
    values.push({"password" : password.value});
    */

    let data = values; 
    console.log(data); //Tjekker hvorvidt vi har fået noget input fra brugeren

    // idk den tjekker vel for om siden er klar, og sender en fejl hvis den ikk er
    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        const respo = this.response // xhr.response??
        console.log(respo); //Til at se, om request kommer tilbage
    }
    });

    // "Åbner" vores http request og angiver at det er POST request fra serveren på localhost:3000
    xhr.open("POST", "http://localhost:3000/", true);

    // definerer at det er en JSON-fil der skal arbejdes med
    xhr.setRequestHeader("Content-Type", "application/json");

    // Sender http requested afsted. Den sender altså den data som er indtastet af brugeren, til vores server (localhost). 
    xhr.send(JSON.stringify(data));
})


//Hvordan får jeg den til at hente alle mine input values fra HTML og smide dem i en JSON

//Spørgsmål til vejleder:
// Den her funktion smider alle values derind, men hvordan får jeg også username derind, så der står [{"username":"Jens"}] fx. 
// Hvordan får jeg den til at gemme dataen i JSON-filen, så det ikke bliver overwrited af en ny bruger der opretter sig. 
// I forhold til at trække data ud af JSON-filen, for at loope igennem dem og finde match eller 