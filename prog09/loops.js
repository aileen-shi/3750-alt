/*
    Aileen Shi
    6/15/24
    CPSC 3750
    Prog 09 JS
*/
names = new Array();

// Create the objects
var sue = new Card("Sue Suthers", "sue@suthers.com", "123 Elm Street, Yourtown ST 99999", "555-555-9876","6/8/1990");
var fred = new Card("Fred Fanboy", "fred@fanboy.com", "233 Oak Lane, Sometown ST 99399", "555-555-4444","3/14/1967");
var jimbo = new Card("Jimbo Jones", "jimbo@jones.com", "233 Walnut Circle, Anotherville ST 88999", "555-555-1344","10/2/2001");

names.push(sue);
names.push(fred);
names.push(jimbo);

function NewCard() {
    console.log("new card");
    // Get info
    var name = document.theform.name.value;
    var email = document.theform.email.value;
    var address = document.theform.address.value;
    var phone = document.theform.phone.value;
    var birthdate = document.theform.birthdate.value;
    
    // Create new card
    var person = new Card(name, email, address, phone, birthdate);
    names.push(person);

    // Display new card
    const cardList = document.getElementById("cardList");
    const listItem = document.createElement("li");
    listItem.innerHTML = person.printCard();
    cardList.appendChild(listItem);
}

// Update to show all
function ShowAll() {
    // Clear current display
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = "";

    // Print all in names array
    for (card of names) {
        const listItem = document.createElement("li");
        listItem.innerHTML = card.printCard();
        cardList.appendChild(listItem);
    }
}

