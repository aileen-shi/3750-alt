// Send register form to php
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    data = new FormData(document.getElementById("register-form"));

    request = new XMLHttpRequest();

    // Response
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
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