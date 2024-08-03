document.addEventListener("DOMContentLoaded", function () {
    const register = document.getElementById("register");
    const loginForm = document.getElementById("login-form");

    register.addEventListener("click", function(event) {
        //window.location.assign("https://aileenshi.com/project2/register.html");
        window.location.href = "register.html";
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
                console.log(request.responseText);/*
                if (request.responseText == "Success") {
                    window.location.href = "account.html";
                }
                else {
                    alert("Incorrect user and/or password");
                }
                    */
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


