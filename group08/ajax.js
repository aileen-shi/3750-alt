/*
    Aileen Shi
    CPSC 3750
    7/19/24
    Zip Code
*/

// Send zip codes to server
function calcDistance() {
  // Get zipcodes to send
  zip1 = document.getElementById("zip1").value;
  zip2 = document.getElementById("zip2").value;

  var request = new XMLHttpRequest();
  // Callback
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      console.log("success");
      console.log(request.responseText);
    } else {
      console.error("failed with status:", request.status);
    }
  };
  // Send
  request.open("POST", "zipcode.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var params =
    "zip1=" + encodeURIComponent(zip1) + "&zip2=" + encodeURIComponent(zip2);
  request.send(params);
}
