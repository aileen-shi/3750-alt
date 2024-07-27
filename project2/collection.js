/*
    Aileen Shi
    CPSC 3750
    7/19/24
    Project 2
*/

var response = "";
var currentName = "";
var currentCard = "";
var display = "";

// Make sure document loaded
document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");
  const backBtn = document.getElementById("back");

  // Update stats
  showSets();
  showCards();

  // Search Enter
  search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchAPI();
    }
  });

  // Search click
  searchBtn.addEventListener("click", function (event) {
    searchAPI();
  });

  // Add event listener back button
  backBtn.addEventListener("click", function(event) {
    goBack();
  });
});

// Search
function searchAPI() {
  const statsContainer = document.getElementById("stats-container");
  const search = document.getElementById("search");
  // New request
  var request = new XMLHttpRequest();

  // Query params
  // Search input or blank
  var input = document.getElementById("search").value;
  var query = input ? `name:${encodeURIComponent(input)}*` : "";
  var orderBy = "name";
  var page = 1;
  var pageSize = 100;
  var select = "id,name,types,subtypes,images,rules,artist,rarity";

  // API url
  var url = `https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(
    query
  )}&page=${page}&pageSize=${pageSize}&orderBy=${encodeURIComponent(
    orderBy
  )}&select=${encodeURIComponent(select)}`;
  request.open("GET", url, true);
  request.setRequestHeader("X-Api-Key", "2b61a930-2c3b-45c7-85a6-8092a7161ccf");

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      // Container to store results
      const resultContainer = document.getElementById("result-container");
      // Reset results
      resultContainer.innerHTML = "";

      // Parse received data
      response = "";
      response = JSON.parse(request.responseText);

      // Extract names
      var names = response.data.map((card) => card.name);
      // Display unique
      // Get unique set and turn back into array
      var unique = [...new Set(names)];

      // Display each name as button
      unique.forEach((name) => {
        var button = document.createElement("button");
        button.textContent = name;
        button.classList.add("name-btn");
        button.addEventListener("click", () => nameClick(name));
        resultContainer.appendChild(button);
      });
    } else {
      console.log("Error");
    }
  };
  request.send();
}

// Get sets
function showSets() {
  const sets = document.getElementById("set-total");

  // New request
  var request = new XMLHttpRequest();

  // API url
  var url = `https://api.pokemontcg.io/v2/sets`;
  request.open("GET", url, true);
  request.setRequestHeader("X-Api-Key", "2b61a930-2c3b-45c7-85a6-8092a7161ccf");

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      responseSet = JSON.parse(request.responseText);
      totalSets = responseSet.totalCount;
      sets.innerText = totalSets;
    } else {
      console.log("Error");
    }
  };
  request.send();
}

// Get Cards
function showCards() {
  const cards = document.getElementById("card-total");

  // New request
  var request = new XMLHttpRequest();

  // API url
  var url = `https://api.pokemontcg.io/v2/cards`;
  request.open("GET", url, true);
  request.setRequestHeader("X-Api-Key", "2b61a930-2c3b-45c7-85a6-8092a7161ccf");

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      responseCard = JSON.parse(request.responseText);
      totalCards = responseCard.totalCount;
      cards.innerText = totalCards;
    } else {
      console.log("Error");
    }
  };
  request.send();
}

// Click name button
// Show all cards with that name
function nameClick(name) {
  // Show back button
  currentName = name;
  display = "cards";
  document.getElementById("back").style.visibility = "visible";
  
  // Reset results container
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";

  // Filter cards that match that set
  var filter = response.data.filter((card) => card.name === name);

  // Display each card
  filter.forEach((card) => {
    const cardItem = document.createElement("button");
    cardItem.textContent = `ID: ${card.id} Name: ${card.name} ${card.subtypes}`;
    cardItem.classList.add("name-btn");
    cardItem.addEventListener("click", () => showDetail(card));
    resultContainer.appendChild(cardItem);
  });
}

// Show details for card
function showDetail(card) {
  // Back button
  currentCard = card;
  display = "details";

  // Reset results container
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";

  // Name
  const name = document.createElement("h4");
  name.innerText = `${card.name} ${card.subtypes}`;
  name.classList.add("card-header");
  resultContainer.appendChild(name);

  // Image
  const image = document.createElement("img");
  image.src = card.images.small;
  image.classList.add("card-img");
  resultContainer.appendChild(image);

  // Rules
  const rules = document.createElement("p");
  rules.innerText = `Rules: ${card.rules}`;
  rules.classList.add("card-text");
  resultContainer.appendChild(rules);

  // Artist
  const artist = document.createElement("p");
  artist.innerText = `Artist: ${card.artist}`;
  artist.classList.add("card-text");
  resultContainer.appendChild(artist);

  // Rarity
  const rarity = document.createElement("p");
  rarity.innerText = `Rarity: ${card.rarity}`;
  rarity.classList.add("card-text");
  resultContainer.appendChild(rarity);
}

// Back button
function goBack() {
  // Cards to sets
  if (display == "cards") {
    console.log("go back to sets");
    // Container to store results
    const resultContainer = document.getElementById("result-container");
    // Reset results
    resultContainer.innerHTML = "";

    // Extract names
    var names = response.data.map((card) => card.name);
    // Display unique
    // Get unique set and turn back into array
    var unique = [...new Set(names)];

    // Display each name as button
    unique.forEach((name) => {
      var button = document.createElement("button");
      button.textContent = name;
      button.classList.add("name-btn");
      button.addEventListener("click", () => nameClick(name));
      resultContainer.appendChild(button);
    });
    display = "sets";
    document.getElementById("back").style.visibility = "hidden";
  }
  // Details to Cards
  else if (display == "details") {
    console.log("go back to cards");
    nameClick(currentName);
    display = "cards";
  }
}

