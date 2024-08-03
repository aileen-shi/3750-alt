document.addEventListener("DOMContentLoaded", function () {
    checkLogin();

    // Back to App
    const button = document.getElementById("back-to-home");

    button.addEventListener("click", function (event) {
        window.location.assign("https://aileenshi.com/project2/collection.html");
    })
});

function checkLogin() {
    request = new XMLHttpRequest();
    console.log("checcking login");
    // Response
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            // Redirect if not logged in
            if (request.responseText == "not loggedin") {
                window.location.href = "login.html";
            }
            // User is already logged in
            else {
                viewFavorites();
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
        const entryContainer = document.createElement("div");
        entryContainer.classList.add("entry-container");
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
        rarity.innerText = `Rarity: ${entries[i].rarity}`;
        rarity.classList.add("entry-text");
        entry.appendChild(rarity);  
        // price
        const price = document.createElement("p");
        price.innerText = `Price: €${entries[i].price}`;
        price.classList.add("entry-text");
        entry.appendChild(price);  
        // date added
        const cardDate = document.createElement("p");
        cardDate.innerText = `Time Added: ${entries[i].time_added}`;
        cardDate.classList.add("entry-text");
        entry.appendChild(cardDate);
        
        // Button to remove
        const button = document.createElement("button");
        button.classList.add("remove-btn");
        button.innerText = "Remove";
        button.addEventListener("click", function(event) {
            removeFavorite(entries[i].card_name, entries[i].time_added);
        });

        entryContainer.appendChild(entry);
        entryContainer.appendChild(button);

        results.appendChild(entryContainer);
    }
}

function removeFavorite(name, dateAdded){
    console.log("removing");
    // Data to pass
    data = {
        nameStr: name,
        dateStr: dateAdded
    };
    jsonData = JSON.stringify(data);

    // Request
    request = new XMLHttpRequest();
    request.open('POST', 'removefavorite.php', true);
    request.setRequestHeader('Content-Type', 'application/json');

    // Response
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            if (request.responseText == "Successfully deleted entry") {
                alert(request.responseText);
                // Update
                viewFavorites();
            }
            console.log(request.responseText);
        }
        else {
            console.log("error", request.statusText);
        }
    };

    // Send request
    request.send(jsonData);    
}