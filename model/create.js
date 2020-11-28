// Når en bruger laves, skal den pushes ind i user array, Userarrayet skal bruges til at hente en oprettet user, istedet for at hente en hardcodet user.
// Skift hele den her funktion ud med "opret user" ish

function createUser(){ // Funktionen fungerer, idet at den pusher en oprettet bruger ind i localstorage key: User value: "string(array"
    if(localStorage.getItem("Users") === null) {
        var usersList = [];
        //nyt like pushes op i det tomme array
    
    
        var usersListString = JSON.stringify(usersList);
        localStorage.setItem("Users", usersListString);
    }

    //Herefter oprettes en variable for den likede bruger, som sendes til localstorage
    var createdUser = JSON.parse(localStorage.getItem("Users"));

    // Her pushes et nyt like ind i et array 
    createdUser.push(Anders); 
    createdUser.push(Emma);


    //LikedPerson laves til en string 
    var newPersonAdd = JSON.stringify(createdUser);
    //tilføjes til local storage
    localStorage.setItem("Likes", newPersonAdd);
    //tilføjer en alert 
    //alert(detailsPreview);
    alert('New user has been pushed to the users array');
    
    // get localstorage jens og push ham ind i likes Array.

}

/*
// kode benyttet/inspiration: https://stackoverflow.com/questions/38963096/save-html-form-input-to-json-file
'use strict';

const fs = require('fs');

let User = Anders;

{
    name: 'Mike',
    age: 25, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};


let data = JSON.stringify(User);  

fs.writeFileSync('storage.JSON', data, finished);

function finished(err)
{
    console.log('success');
}
*/
