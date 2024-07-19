/*
    Aileen Shi
    CPSC 3750
    7/19/24
    Zip Code
*/

console.log("loaded");

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("zipForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      console.log("HERE");
      // Get zipcodes to send
      zip1 = document.getElementById("zip1").value;
      zip2 = document.getElementById("zip2").value;

      var request = new XMLHttpRequest();

      // Send
      request.open("POST", "zipcode.php", true);
      request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );

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
