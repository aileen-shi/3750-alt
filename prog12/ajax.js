// global variables to keep track of the request
// and the function to call when done
var ajaxreq = false,
  ajaxCallback;

// ajaxRequest: Sets up a request
function ajaxRequest(query) {
  try {
    //make a new request object
    ajaxreq = new XMLHttpRequest();
  } catch (error) {
    console.error("XMLHttpRequest failed to initialize", error);
    return false;
  }
  var filename =
    "https://aileenshi.com/prog12/search.php?query=" +
    encodeURIComponent(query);
  ajaxreq.open("GET", filename, true);
  ajaxreq.onreadystatechange = ajaxResponse;
  try {
    ajaxreq.send(null);
  } catch (error) {
    console.error("AJAX request failed to send", error);
  }
}

// ajaxResponse: Waits for response and calls a function
function ajaxResponse() {
  if (ajaxreq.readyState != 4) return;
  if (ajaxreq.status == 200) {
    // if the request succeeded...
    if (ajaxCallback) ajaxCallback();
  } else alert("Request failed: " + ajaxreq.statusText);
  return true;
}
