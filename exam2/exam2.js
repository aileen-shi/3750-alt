/*
    Aileen Shi
    CPSC 3750
    7/20/24
    Exam 2
*/

var dragSrcEl = null;
var count = 0;

function dragStart(e) {
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);

  this.classList.add("dragElem");
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
}

function drop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl != this && this.id == "word-bank") {
    dragSrcEl.parentNode.removeChild(dragSrcEl);
    document.getElementById("word-bank-list").appendChild(dragSrcEl);
    dragSrcEl.classList.remove("dragElem");
    // Update count
    countUpdate();
  }
  return false;
}

// Add event handlers for dragging
function addDnDHandlers(elem) {
  elem.addEventListener("dragstart", dragStart, false);
  elem.addEventListener("dragover", dragOver, false);
}

const wordBank = document.getElementById("word-bank");
wordBank.addEventListener("drop", drop, false);
wordBank.addEventListener("dragover", dragOver, false);

// REMOVE
var words = document.querySelectorAll(".word");
[].forEach.call(words, addDnDHandlers);

// Update count for word bank
function countUpdate() {
  count++;
  console.log(count);
  document.getElementById("word-count").innerText = count;
}

// Show list on button click
function showList(e) {
  // TESTING
  console.log(this.innerText);

  //
}

// Function to add button event listener
function addBtnHandler(elem) {
  elem.addEventListener("click", showList);
}

// Add event handlers to buttons
var buttons = document.querySelectorAll(".vowel-btn");
[].forEach.call(buttons, addBtnHandler);

// Loaded
document.addEventListener("DOMContentLoaded", function () {
  // New request
  var request = new XMLHttpRequest();

  request.open("GET", "exam2.php", true);
  request.responseType = "json";
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Update result
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      data = request.response;
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log("Error with request");
    }
  };

  request.send();
});
