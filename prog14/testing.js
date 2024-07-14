document.addEventListener("DOMContentLoaded", (event) => {
  function initializeCookie() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("requested php", request.responseText);
      } else {
        console.log("error", request.statusText);
      }
    };
    request.open("GET", "test.php", true);
    request.send();
  }
  console.log("end of js");
  initializeCookie();
});
