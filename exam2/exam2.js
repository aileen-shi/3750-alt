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

  request.open("POST", "exam2.php", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Update result
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };

  request.send("text=" + encodeURIComponent(numbers));
});
