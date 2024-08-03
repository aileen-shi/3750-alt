document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-home");

    button.addEventListener("click", function (event) {
        window.location.assign("https://aileenshi.com/project2/collection.html");
    })
});

// Send register form to php
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    data = new FormData(document.getElementById("register-form"));

    request = new XMLHttpRequest();

    // Response
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            if (request.responseText == "Success") {
                window.location.href = "login.html";
            }
        }
        else {
            console.log("error", request.statusText);
        }
    };

    // Send request
    request.open("POST", "register.php", true);
    request.send(data);
});