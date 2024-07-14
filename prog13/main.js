/*
  Aileen Shi
  CPSC 3750
  7/12/24
  Handlebars
*/
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
// Button click
btn.addEventListener("click", function () {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      pageCounter +
      ".json"
  );
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

// Render
function renderHTML(petsData) {
  var rawTemplate = document.getElementById("petsTemplate").innerHTML;

  var compiledTemplate = Handlebars.compile(rawTemplate);
  console.log(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(petsData);

  var petsContainer = document.getElementById("animal-info");
  petsContainer.innerHTML += ourGeneratedHTML;
}
