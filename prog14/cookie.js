/*
    Aileen Shi
    7/13/24
    CPSC 3750
    Prog14 PHP I/O
*/
// Post numbers to php
function checkNum() {
  nums = document.getElementById("numbers").value;

  ajaxreq = new XMLHttpRequest();

  ajaxreq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("results").innerHTML = this.responseText;
    }
  };

  // Send numbers
  ajaxreq.open("POST", "cookie.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajaxreq.send("numbers=" + encodeURIComponent(numbers));
}

// Request for certain list
function showList(listType) {
  ajaxreq = new XMLHttpRequest();

  ajaxreq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("results").innerHTML = this.responseText;
    }
  };

  // Send request for desired list
  ajaxreq.open("POST", "show.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajaxreq.send("type=" + encodeURIComponent(listType));
}

// Request to reset
function reset() {
  ajaxreq = new XMLHttpRequest();

  ajaxreq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("results").innerHTML = this.responseText;
    }
  };

  // Send request for resetting
  ajaxreq.open("POST", "reset.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajaxreq.send();
}
