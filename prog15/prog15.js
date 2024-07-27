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
            //entries = JSON.parse(request.responseText);
            console.log(entries);
        }
        else {
            console.log("error", request.statusText);
        }
    }; 
    
    request.open("GET", "viewall.php");
    request.send();
});