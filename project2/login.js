/* 
    Aileen Shi
    CPSC 3750
    8/3/24
    Login
*/
document.addEventListener("DOMContentLoaded", function () {
    const register = document.getElementById("register");
    const loginForm = document.getElementById("login-form");
    const back = document.getElementById("back-to-home");

    // Go to register page
    register.addEventListener("click", function(event) {
        window.location.href = "register.html";
    });

    // Go back home
    back.addEventListener("click", function(event) {
        window.location.href = "collection.html";
    });

    // Send register form to php
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        data = new FormData(document.getElementById("login-form"));

        request = new XMLHttpRequest();

        // Response
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                //entries = JSON.parse(request.responseText);
                console.log(request.responseText);
                if (request.responseText == "Success") {
                    window.location.href = "account.html";
                }
                else {
                    alert("Incorrect user and/or password");
                }
                    
            }
            else {
                console.log("error", request.statusText);
            }
        };

        // Send request
        request.open("POST", "login.php", true);
        request.send(data);
    });
});


