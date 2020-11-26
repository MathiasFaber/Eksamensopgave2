document.getElementById("signin").addEventListener("click", login());

function login(){
    var ls = JSON.parse(localStorage.getItem('User'));
    var unval = document.getElementById('username').value;
    //var psval1 = JSON.parse(localStorage.getItem('User')); 
    var psval = document.getElementById('password').value;

    for(i = 0; i < ls.length; i++){
        if(ls[i]._username === unval && ls[i]._password === psval) {
            alert("Successfully logged in!");
            window.open("frontpage.html")
        };
        if(ls[i]._username != unval && ls[i]._password != psval) {
            alert("Invalid Username or Password! Please try again");
        };
    };
    
};
console.log(login())

//};

// funktionen logger dig ind uanset hvad!?

/*
    if (unval1 == unval2 && psval1 == psval2){
        alert ('Logged in');
        window.open('.frontpage.html');
    }else{
        alert ('login failed')
    }
    */

    // Overvej om man kan lave en funktion som gør, at når man er logget ind som Jens, står det på forsiden hvem man er,
    //og derfra kommer der forslag til likes. 



