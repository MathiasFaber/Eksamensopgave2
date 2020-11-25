



var addALike = '<button type="button" class ="addALikeBtn" onclick="addToMylikes()">Like';
container.innerHTML += addALike;


function addToMylikes() {
    var matchToLike = match;

    //Hent vores nuværende matches fra localstorage
    //Hvis der ikke er nogen likes, så sikrer den at det er et tomt array.
    var likes = localStorage.getItem('likes');
    if (likes == null) {
        likes = [];
    } else {
        likes = JSON.parse(likes);
    }
}
