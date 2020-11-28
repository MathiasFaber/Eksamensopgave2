// When people like some one, the persones unique user ID will be addet to the array of people they like in the intrest class
var possibleMatch = ["Anders", "Anna"];//Anders (arrayet her skal være tomt, og likes pushes ind i det)
var possibleMatch2 = ["Anna", "Anders"]; //Anna (arrayet her skal være tomt, og likes pushes ind i det)

// var possibleMatch = window.localStorage.getItem('user');
// lave flere af disse variable, så appen kan understøtte 10 brugere ish?
// ikke optimalt men bare for at vise at den her måde fungerer. 

/*
function like() {
    possibleMatch.push(document.getElementById("profile").innerHTML);
    document.getElementById("like").innerHTML = possibleMatch;


    for (i = 0; i < possibleMatch2.length; i++){
        if (document.getElementById("User1").innerHTML == possibleMatch2 && possibleMatch2 == possibleMatch){
        }
};
*/
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





module.exports = match;
module.exports = matches;

