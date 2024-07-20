/*
    Aileen Shi
    CPSC 3750
    7/20/24
    Exam 2
*/

var dragSrcEl = null;
var count = 0;

// Drag start event listener
function dragStart(e) {
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);

  this.classList.add("dragElem");
}

// Drag over event listener
function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
}

// Drop event listener
function drop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  // Target is word bank
  if (dragSrcEl != this && this.id == "word-bank") {
    // Remove from word list and put into word bank
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

// Add event handlers for dragging in wordbank
const wordBank = document.getElementById("word-bank");
wordBank.addEventListener("drop", drop, false);
wordBank.addEventListener("dragover", dragOver, false);

// Update count for word bank
function countUpdate() {
  count++;
  document.getElementById("word-count").innerText = count;
}

// Show list on button click
function showList(e) {
  const list = e.currentTarget.nextElementSibling;
  list.classList.remove("hidden");
  list.classList.add("visible");
  //
}

// Function to add button event listener
function addBtnHandler(elem) {
  elem.addEventListener("click", showList);
}

// Add event handlers to buttons
var buttons = document.querySelectorAll(".vowel-btn");
[].forEach.call(buttons, addBtnHandler);

// Add data to corresponding list
// key = word
// value = vowels
function organizeWords(data) {
  // lists
  const list0 = document.getElementById("list0");
  const list1 = document.getElementById("list1");
  const list2 = document.getElementById("list2");
  const list3 = document.getElementById("list3");
  const list4 = document.getElementById("list4");
  const list5 = document.getElementById("list5");
  const list6 = document.getElementById("list6");

  for (const key in data) {
    const value = data[key];

    // New word to add to list
    const newWord = document.createElement("li");
    newWord.innerText = key;
    newWord.classList.add("word");
    newWord.draggable = true;

    // Append to corresponding list
    switch (value) {
      case 0:
        list0.appendChild(newWord);
        break;
      case 1:
        list1.appendChild(newWord);
        break;
      case 2:
        list2.appendChild(newWord);
        break;
      case 3:
        list3.appendChild(newWord);
        break;
      case 4:
        list4.appendChild(newWord);
        break;
      case 5:
        list5.appendChild(newWord);
        break;
      case 6:
        list6.appendChild(newWord);
        break;
    }
  }
}

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
      // Organize into lists
      organizeWords(request.response);
      // Add event handlers
      var words = document.querySelectorAll(".word");
      [].forEach.call(words, addDnDHandlers);
    } else {
      console.log("Error with request");
    }
  };

  request.send();
});
