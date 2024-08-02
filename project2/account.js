document.addEventListener("DOMContentLoaded", function () {
    checkLogin();
});

function checkLogin() {
    request = new XMLHttpRequest();

    // Response
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.respsonseText);
        }
        else {
            console.log("error", request.statusText);
        }
    };

    // Send request
    request.open("POST", "account.php", true);
    request.send();
}
