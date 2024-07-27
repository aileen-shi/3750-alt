/*
    Aileen Shi
    CPSC 3750
    7/27/24
    Integrate Database
*/

// Insert
document.getElementById("record-form").addEventListener('submit', function(event) {
    event.preventDefault();

    data = new FormData(document.getElementById("record-form"));

    request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
        }
        else {
            console.log("error", request.statusText);
        }
    };

    request.open("POST", "insert.php", true);
    request.send(data);
});

// View all
document.getElementById("view-all").addEventListener('click', function(event) {

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
    
    request.open("GET", "viewall.php");
    request.send();
});

function show(entries) {
    const results = document.getElementById("result-container");
    results.innerHTML = "";

    for (i = 0; i < entries.length; i++) {
        // Create element
        const entry = document.createElement("div");
        entry.classList.add("person");

        // Last name
        const last = document.createElement("p");
        last.innerText = `Last Name: ${entries[i].last_name}`;
        last.classList.add("person-text");
        entry.appendChild(last);
        // First name
        const first = document.createElement("p");
        first.innerText = `First Name: ${entries[i].first_name}`;
        last.classList.add("person-text");
        entry.appendChild(first);
        // Email
        const email = document.createElement("p");
        email.innerText = `Email: ${entries[i].email}`;
        last.classList.add("person-text");
        entry.appendChild(email);  
        
        results.appendChild(entry);
    }
}