/*
    Aileen Shi
    CPSC 3750
    7/13/24
    File I/O
*/

// Check cookies on file load
document.addEventListener("DOMContentLoaded", (event) => {
  function initializeCookie() {
    // New request
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("initialize cookie ", request.responseText);
      } else {
        console.log("error", request.statusText);
      }
    };
    // Send
    request.open("GET", "setcookie.php", true);
    request.send();
  }
  // Call function
  initializeCookie();
});

// Send numbers
function checkNum() {
  // Get numbers to send
  numbers = document.getElementById("numbers").value;

  // New request
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("checknum: ", request.responseText);
    } else {
      console.log("error", request.statusText);
    }
  };
  // Send
  request.open("POST", "checknum.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send("text=" + encodeURIComponent(numbers));
}

// Get list
function showList(listType) {
  var request = new XMLHttpRequest();
  // Callback
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Show in results div
      var numStr = this.responseText;
      document.getElementById("results").innerHTML = this.responseText;
      console.log(numStr);
    } else {
      console.error("failed with status:", request.status);
    }
  };
  request.open("POST", "show.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send("type=" + encodeURIComponent(listType));
}

// Erase
function reset() {
  // New request
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("reset ", request.responseText);
    } else {
      console.log("error");
    }
  };
  // Send
  request.open("POST", "reset.php", true);
  request.send();
}
