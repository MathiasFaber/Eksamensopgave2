
function login(){
    var user = JSON.parse(localStorage.getItem("User"));
    var unval = document.getElementById('username').value;
    //var psval1 = JSON.parse(localStorage.getItem('User')); 
    var psval = document.getElementById('password').value;
    var lol = [];
    lol.push(user);
    var username = [];
    var password = [];
    var correctUsername = 0;
    var correctPassword = 0;
    for (i = 0; i < lol.length; i++){
        for (j = 0; j < user.length; j++){
            username.push(user[j].username)
            password.push(user[j].password)
        };
    };
    for (g = 0; g < username.length; g++){
        if (username[g] == unval){
            correctUsername = correctUsername + 1;
            alert ("Correct Username")
        };
    
    };
    for (h = 0; h < password.length; h++){
        if (password[h] == psval){
            correctPassword = correctPassword + 1;
            alert ("Correct password")
        };
    
    };

    if (correctUsername == 1 && correctPassword == 1){
        alert ("Correct username & password")
        window.location = ("frontpage.html") // Brug serveren istedet for window.location.
    }

};
    

    // Overvej om man kan lave en funktion som gør, at når man er logget ind som Jens, står det på forsiden hvem man er,
    //og derfra kommer der forslag til likes. 



