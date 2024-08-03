document.addEventListener("DOMContentLoaded", function () {
    checkLogin();

});

function checkLogin() {
    request = new XMLHttpRequest();

    // Response
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            response = JSON.parse(request.responseText);
            // Redirect if not logged in
            if (!response.loggedin) {
                window.location.href = "login.html";
            }
        }
        else {
            console.log("error", request.statusText);
        }
    };

    // Send request
    request.open("POST", "account.php", true);
    request.send();
}

// Get favorites
function viewFavorites() {}