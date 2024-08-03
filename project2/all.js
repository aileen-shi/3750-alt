document.addEventListener("DOMContentLoaded", function () {
    viewAll();
});

function viewAll() {
    // Response
    request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            entries = JSON.parse(request.responseText);
            show(entries);
        }
        else {
            console.log("error", request.statusText);
        }
    };

    // Send request
    request.open("GET", "register.php", true);
    request.send();
}

function show(entries) {
    const results = document.getElementById("all-container");
    for (i = 0; i < entries.length; i++) {
        // Create element
        const entry = document.createElement("div");
        entry.classList.add("entry");

        // user
        const user = document.createElement("p");
        user.innerText = `User: ${entries[i].username}`;
        user.classList.add("entry-text");
        entry.appendChild(user);

        // creation date
        const creation = document.createElement("p");
        creation.innerText = `Creation: ${entries[i].registration}`;
        creation.classList.add("entry-text");
        entry.appendChild(creation);

        // last login
        const login = document.createElement("p");
        login.innerText = `Last Login: ${entries[i].num_login}`;
        login.classList.add("entry-text");
        entry.appendChild(user);

        // number logins
        const numLogin = document.createElement("p");
        numLogin.innerText = `Num Logins: ${entries[i].num_login}`;
        numLogin.classList.add("entry-text");
        entry.appendChild(numLogin);

        results.appendChild(entry);
    }
}