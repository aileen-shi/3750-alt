document.addEventListener("DOMContentLoaded", function () {
    checkLogin();
    viewFavorites();
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
function viewFavorites() {
    request = new XMLHttpRequest();

    // Response
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            response = JSON.parse(request.responseText);
            console.log(response);
            show(response);
        }
        else {
            console.log("error", request.statusText);
        }
    };

    // Send request
    request.open("POST", "viewfavorites.php", true);
    request.send();
}

// Display list
function show(entries) {
    const results = document.getElementById("favorites-container");
    results.innerHTML = "";

    for (i = 0; i < entries.length; i++) {
        // Create element
        const entry = document.createElement("div");
        entry.classList.add("entry");

        // name
        const cardName = document.createElement("p");
        cardName.innerText = `Card Name: ${entries[i].card_name}`;
        cardName.classList.add("entry-text");
        entry.appendChild(cardName);
        // card year
        const cardYear = document.createElement("p");
        cardYear.innerText = `Release Date: ${entries[i].card_year}`;
        cardYear.classList.add("entry-text");
        entry.appendChild(cardYear);
        // rarity
        const rarity = document.createElement("p");
        rarity.innerText = `Email: ${entries[i].rarity}`;
        rarity.classList.add("entry-text");
        entry.appendChild(rarity);  
        // price
        const price = document.createElement("p");
        price.innerText = `Email: ${entries[i].price}`;
        price.classList.add("entry-text");
        entry.appendChild(price);  
        // date added
        const cardDate = document.createElement("p");
        cardDate.innerText = `Email: ${entries[i].date}`;
        cardDate.classList.add("entry-text");
        entry.appendChild(cardDate);

        results.appendChild(entry);
        
        // Button to remove
        const button = document.createElement("button");
        button.classList.add("remove-btn");
        button.innerText = "Remove";
        button.addEventListener("click", function(event) {
            console.log("removing");
        });

        results.appendChild(button);
    }
}

function removeFavorite(name, dateAdded){
    $user = $_SESSION['user'];

}