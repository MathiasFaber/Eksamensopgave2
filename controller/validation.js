//const { json } = require("express");

//var signUpButton = document.getElementById("SignedUp").addEventListener("click",validateForm);
// Linke til nye sider ved create virker ikke pr??

// Husk at refere til at du har brugt store dele af din studiegruppes kode i denne del. 

// benytter klassen fra user.js
class User {
    constructor(username, password, phone, city, zip, address, email, gender){
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.email = email;
        this.gender = gender;
    }
}


// Hardcode usere her. Kommentar til rapport: Det ville være mere funktionelt hvis man kunne pushe en ny oprettet bruger ind i 
var Jens = new User("Jens", "123abe", "1234678", "greve", "2670", "hej alle 200", "abe@mail.dk", "male")
var Anders = new User("Anders", "321abe", "1234678", "kbh", "2300", "hej alle 201", "ged@mail.dk", "male")
var Emma = new User("Emma", "123abe", "1234678", "greve", "2670", "hej alle 202", "giraf@mail.dk", "female")

/*
var Hardcoded = [];
Hardcoded.push(JSON.stringify(Jens))
Hardcoded.push(JSON.stringify(Anders))
Hardcoded.push(JSON.stringify(Emma))


localStorage.setItem("User", Hardcoded)
*/


//brugerne hentes så der kan tilføjes brugere, hvorunder userlist automatisk vil tage informationen 
if(localStorage.getItem("User") === null) {
    var userList = [];
    //new user pushes op i det tomme array
    userList.push(Jens)
    userList.push(Anders)
    userList.push(Emma)

    var userListString = JSON.stringify(userList);
    localStorage.setItem("User", userListString)
}


// herefter valideres samtlige felter ved oprettelse af en ny bruger 

//fejl og errors defineres
function printError(elemID, hintMsg) {
    document.getElementById(elemID).innerHTML = hintMsg;
}


//validate form funktionen defineres
function validateForm(event) {
    //event.preventDefault 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;


//herefter tillægger jeg alle ovenstående variable en error med en standard værdi 
    var usernameErr = true;
    var passwordErr = true;
    var phoneErr = true;
    var cityErr = true;
    var zipErr = true;
    var addressErr = true;
    var emailErr = true;

// validere userName
    if (username ==""){
        printError("usernameErr", "Type in a username");
    }
//klargøre hvilke tegn username må indeholde --> disse tegn er fundet på stack Overflow
//https://stackoverflow.com/questions/9628879/javascript-regex-username-validation
        else {
            var regex = /^[a-zA-Z\s]+$/;
//hvilke situationer der skal printes en errormessage defineres
            if (regex.test(username) === false){
                printError("usernameErr", "Please enter a username using the standard alphabet");
            }else {
                printError("usernameErr", "");
                usernameErr = false;
            }
        }
// email valideres
    if (email =="") {
        printError("emailErr", "please enter an email")
    }
//definere hvilke tegn email må indeholde
    else{
        var regexMail = /^\S+@\S+\.\S+$/;
        if (regexMail.test(email) === false) {
            printError("emailErr", "Please enter a valid email")
        }else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

//Validering af telefon nummer
    if (phone ==""){
        print("phoneErr", "please enter your phone number");
    } else {
        //regex fra stackoverflow
        var regexPhone = /^[0-9]{8}$/;
        if (regexPhone.test(phone)===false){
            printError("phoneErr", "please enter a validt phone number - hint it has to be 8 digits")
        } else {
            printError("phoneErr", "");
            phoneErr = false;
        }
    }

//validering af by  
    if (city ==""){
        print("cityErr", "please enter a city");
    } else {
        //samme regex fra username - fra stackoverflow
        var regexCity = /^[a-zA-Z\s]+$/;
        if(regexCity.test(city) === false) {
            printError("cityErr", "Cityname can only contain letters from A-Z");
        }else {
            printError("cityErr", "");
            cityErr = false;
        }
    }

//validating af postnummer, da datingappen er i DK, sættes antal cifte til 4 

    if (zip==""){
        print("zipErr", "please enter a valid ZIP-code");
    } else {
        //der benyttes samme regex som til telefonnummer dog ændres antal digits til 4 fremfor 8 
        var regexZip = /^[0-9]{4}$/;
        if (regexZip.test(zip) === false) {
        printError("zipErr","Please enter a valid ZIP-Code, it should be exactly 4-digits") ;
        }
        else {
            printError("zipErr", "");
            zipErr = false;
        }
    }

//validering af adresse - regex fra stackoverflow
//https://stackoverflow.com/questions/3763820/javascript-regular-expression-to-validate-an-address
    if (address==""){
        print("adressErr", "please enter an address"); 
    } else {
        var regexAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
        if (regexAddress.test(address) === false) {
            printError("addressErr", "You have to type in a valid address");
        } else {
            printError("addressErr", "");
            addressErr = false;
        }
    }

//validering af password 
    if (password==""){
        printError("passwordErr", "Please type a password");
    }else {
        //password regex fra stackoverflow
        var regexPassword = /^[a-zA-Z0-9\s,.'-]{3,}$/;
        if (regexAddress.test(password)===false){
            printError("passwordErr", "please enter a secure password");
        }else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

//herefter sørges der for at, hvis nogle af oplysningerne er forkerte, skal storeDetails funktionen ikke køre.
    if ((usernameErr || phoneErr || cityErr || zipErr || addressErr || emailErr || passwordErr) == true){
        return false;
    } else {
    // laver en ny string, som viser hvad der er blevet indtastet 
        var detailsPreview = "You have entered the following details: \n" +
        "Username: " + username + "\n" + 
        "Email: " + email + "\n" + 
        "Phone numer: " + phone + "\n" + 
        "City: " + city + "\n" + 
        "ZIP-code: " + zip+ "\n" + 
        "Address: " + address + "\n" + 
        "username: " + username + "\n" + 
        "Password: " + "*****"; 
    

//Herefter oprettes en variable for oprettede bruger, som sendes til localstorage
    var createdUser = JSON.parse(localStorage.getItem("User"));
    console.log(createdUser);

    //pusher ny bruger ind i et array 
    createdUser.push(new User (username, password, phone, city, zip, address, email));
    console.log(createdUser);

    //createduser laves til en string 
    var newUserAdd = JSON.stringify(createdUser);
    //tilføjes til local storage
    localStorage.setItem("User", newUserAdd);
    //tilføjer en alert 
    alert(detailsPreview);
    alert('New User has been created');
    console.log(newUserAdd);

    // window.location: returns the href (URL) of the current page
    // window.location = ("signIn.html");

    
    

}

}

