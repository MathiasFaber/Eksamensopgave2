/*function toLikesHTML() {
    if(localStorage.getItem("likes") === n){
        var likedUser = [];
        
        var likedUserString = JSON.parse(likedUser);
        localStorage.getItem("likes", likedUserString);
    }
    //Herefter oprettes en variable for den likede bruger, som sendes til localstorage
    var likedPerson1 = JSON.stringify(localStorage.setItem("Likes"));

    // Her pushes et nyt like ind i et array 
    likedPerson1.pop(Anders);

    //LikedPerson laves til en string 
    var newLike = JSON.parse(likedPerson1);
    //tilføjes til local storage
    localStorage.getItem("Likes", newLike);
    //tilføjer en alert 
    //alert(detailsPreview);
    alert('New like has been retrieved maybe');




    //JSON.parse(myLikes) = likedUser;
    //document.getElementById('myLikes').innerHTML = likedUser;
    
    document.getElementById('likes').innerHTML = 
    profiles.innerText = localStorage.getItem("likes")
    //document.getElementById('likes').innerHTML = localStorage.getItem("likes");
    
}
*/

function toLikesHTML() {
    var likedPerson = JSON.parse(localStorage.getItem("Likes"));
    var all = []
    all.push(likedPerson);
    var display = []
    for (i = 0; i < all.length; i++){
        for (j = 0; j < likedPerson.length; j++){
            //alert("Du har liket" + " '" + likedPerson[j].username + "'. " + "Hvis personen liker dig, matcher i!")
            display.push(likedPerson[j].username)
            //alert(display)
            //display = likedPerson[j].username

        }
    }
    // Her skal de usernames der er pushet ind i display arrayet, sættes ind i HTML dokumentet. 
    document.getElementById("lik").innerHTML = "You Have Liked The Following Person(s): " + "<br>" + "<br>" + display + "<br>" + "<br>" + "If your like(s), likes you back, it's a match!";
    /*
    document.getElementById("lik").innerHTML = display[1];
    document.getElementById("lik").innerHTML = display[2];
    document.getElementById("lik").innerHTML = display[3];
    */

}

/*
function addLike(name, phoneNumber){
    alert (name, phoneNumber);
};
*/