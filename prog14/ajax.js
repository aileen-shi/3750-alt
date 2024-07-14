document.addEventListener("DOMContentLoaded", (event) => {
  function initializeCookie() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("initialize cookie ", request.responseText);
      } else {
        console.log("error", request.statusText);
      }
    };
    request.open("GET", "setcookie.php", true);
    request.send();
  }
  initializeCookie();
});

// Send numbers
function checkNum() {
  numbers = document.getElementById("numbers").value;

  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("checknum: ", request.responseText);
    } else {
      console.log("error", request.statusText);
    }
  };
  request.open("POST", "checknum.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send("text=" + encodeURIComponent(numbers));
}

// Get list
function showList(listType) {
  // Update list color
  document.getElementById("results").style.backgroundColor =
    document.getElementById(listType).style.backgroundColor;
  var request = new XMLHttpRequest();
  // Callback
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
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
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("reset ", request.responseText);
    } else {
      console.log("error", request.statusText);
    }
  };
  request.open("POST", "reset.php", true);
  request.send();
}
