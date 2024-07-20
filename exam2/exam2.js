/*
    Aileen Shi
    CPSC 3750
    7/20/24
    Exam 2
*/

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
