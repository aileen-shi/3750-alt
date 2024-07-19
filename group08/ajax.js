/*
    Aileen Shi
    CPSC 3750
    7/19/24
    Zip Code
*/

// Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to submit
  document
    .getElementById("zipForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get zipcodes to send
      zip1 = document.getElementById("zip1").value;
      zip2 = document.getElementById("zip2").value;

      // New request
      var request = new XMLHttpRequest();

      request.open("POST", "zipcode.php", true);
      request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );

      // Update result
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          document.getElementById("result").innerText = request.responseText;
        }
      };

      var params =
        "zip1=" +
        encodeURIComponent(zip1) +
        "&zip2=" +
        encodeURIComponent(zip2);
      request.send(params);
    });
});
