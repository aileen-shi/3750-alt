/*
    Aileen Shi
    Prog 06
    CPSC3750
    6/8/24

    Javascript file for Prog06
*/

// Global variable
count = 0;
numBtn = 0;
var moving = false;

// Function that creates a button
function createButton() {
    var color = document.getElementById("colors").value;
    var width = document.getElementById("view").offsetWidth;
    var height = document.getElementById("view").offsetHeight;
    var x = Math.floor(Math.random() * width);
    console.log(x);
    var y = Math.floor(Math.random() * height);

    // Make sure button doesnt overlap with outside
    if (y >= height - 25) {
        y -= 25;
    }
    if (x >= width - 25) {
        x -= 25;
    }

    var newButton = document.createElement("button");
    newButton.setAttribute("move-dir", direction);
    newButton.innerHTML = Math.floor(Math.random() * 100);
    
    newButton.classList.add("color-button");
    newButton.id = numBtn++;
    newButton.style.backgroundColor = color;
    newButton.style.left = x + "px";
    newButton.style.top = y + "px";
    document.getElementById("view").appendChild(newButton);

    newButton.addEventListener("click", clickButton);
}

// Function that changes button color and adds total
function clickButton() {
    var color = document.getElementById("colors").value;
    this.style.backgroundColor = color;
    count += parseInt(this.textContent);
    document.getElementById("counter").textContent = count;
}


