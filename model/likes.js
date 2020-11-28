// brug dette istedet for at sætte hele user klassen ind igen:
// const user = require('./Model/user')
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

var Jens = new User("Jens", "123abe", "1234678", "greve", "2670", "hej alle 200", "abe@mail.dk", "male")
var Anders = new User("Anders", "321abe", "1234678", "kbh", "2300", "hej alle 201", "ged@mail.dk", "male")
var Emma = new User("Emma", "123abe", "1234678", "greve", "2670", "hej alle 202", "giraf@mail.dk", "female")


function like(){
    if(localStorage.getItem("Likes") === null) {
        var likesList = [];
        //nyt like pushes op i det tomme array
    
    
        var likesListString = JSON.stringify(likesList);
        localStorage.setItem("Likes", likesListString);
    }

    // If statement her, som gør at hvis brugeren er liket i forvejen, kan han/hun ikke likes igen. 

    //Herefter oprettes en variable for den likede bruger, som sendes til localstorage
    var likedPerson = JSON.parse(localStorage.getItem("Likes"));

    // Her pushes et nyt like ind i et array 
    likedPerson.push(Anders);
    //likedPerson.push(Emma);


    //LikedPerson laves til en string 
    var newLikeAdd = JSON.stringify(likedPerson);
    //tilføjes til local storage
    localStorage.setItem("Likes", newLikeAdd);
    //tilføjer en alert 
    //alert(detailsPreview);
    alert('New like has been pushed to your likes array');
   
    // get localstorage jens og push ham ind i likes Array.

}

//export import er en mulighed for at overføre klasser mellem js dokumenter. 
/*
import User from './validation'
//var Jens = new User("Jens", "123abe", "1234678", "greve", "2670", "hej alle 200", "abe@mail.dk", "male")
var Anders = new User("Anders", "321abe", "1234678", "kbh", "2300", "hej alle 201", "ged@mail.dk", "male")
//var Emma = new User("Emma", "123abe", "1234678", "greve", "2670", "hej alle 202", "giraf@mail.dk", "female")
*/

