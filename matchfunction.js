// When people like some one, the persones unique user ID will be addet to the array of people they like in the intrest class
var possibleMatch = ["Anders", "Anna"];//Anders (arrayet her skal være tomt, og likes pushes ind i det)
var possibleMatch2 = ["Anna", "Anders"]; //Anna (arrayet her skal være tomt, og likes pushes ind i det)


function like() {
    possibleMatch.push(document.getElementById("profile").innerHTML);
    document.getElementById("like").innerHTML = possibleMatch;

    


/*
    for (i = 0; i < possibleMatch2.length; i++){
        if (document.getElementById("User1").innerHTML == possibleMatch2 && possibleMatch2 == possibleMatch){

        }
*/
};

var matches = [];

function match (){

    for (i = 0; i < possibleMatch.length; i++){
        for (j = 0; j < possibleMatch2.length; j++){
            if (possibleMatch[i] == possibleMatch2[j]){
                matches.push(possibleMatch[0] + " & " +  possibleMatch2[0] + " is a match")
                break;
            }
        }
    }
}

console.log(match())
console.log(matches)

/*
function like2() {
    possibleMatch2.push(document.getElementById("profile").innerHTML);
    document.getElementById("like").innerHTML = possibleMatch2;
};
*/

/*
document.getElementById("User1").innerHTML = User;

function match() {
    for (i = 0; i < possibleMatch2.length; i++){
        if (User == possibleMatch2){
            alert ("It's a match!")
        }

    }
}
console.log(match())
*/

//document.getElementById("like").innerHTML = likesArray.push(document.getElementById("profile").innerHTML)
    /*
    addEventListener("click", function(){
        likesArray.push("aLikedPerson");
        console.log(likesArray)
        */
/*

    document.getElementById("dislikeBtn").addEventListener("click", function(){
        
    });
}
*/

//lav en github!!