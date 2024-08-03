/*
    Aileen Shi
    CPSC 3750
    7/19/24
    Project 2
*/

var response = "";
var currentName = "";
var currentCard = "";
const pageSize = 100;
var currentPage = 1;

// Make sure document loaded
document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");
  const showAll = document.getElementById("show-all");
  const previous = document.getElementById("previous");
  const next = document.getElementById("next");
  const account = document.getElementById("account-btn");

  // Event listener for previous and next buttons
  previous.addEventListener("click", function(event) {
    if (currentPage > 1) {
      currentPage--;
    }
    searchAPI();
  });
  next.addEventListener("click", function(event) {
    currentPage++;
    searchAPI();
  });

  // Update stats
  showSets();
  showCards();

  // Search Enter
  search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      currentPage = 1;
      searchAPI();
    }
  });

  // Search click
  searchBtn.addEventListener("click", function (event) {
    currentPage = 1;
    searchAPI();
  });

  // Add event listener show all button
  showAll.addEventListener("click", function(event) {
    searchAPI();
  });

  // Event listener account info
  account.addEventListener("click", function(event) {
    window.location.assign("https://aileenshi.com/project2/account.html");
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
  var select = "id,hp,name,set,evolvesFrom,types,subtypes,images,rules,artist,rarity,flavorText,cardmarket";

  // API url
  var url = `https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(
    query
  )}&page=${currentPage}&pageSize=${pageSize}&orderBy=${encodeURIComponent(
    orderBy
  )}&select=${encodeURIComponent(select)}`;
  request.open("GET", url, true);
  request.setRequestHeader("X-Api-Key", "2b61a930-2c3b-45c7-85a6-8092a7161ccf");

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {

      // Previous and next buttons
      if (currentPage == 1) {
        document.getElementById("next").style.visibility = "visible";
      }
      else {
        document.getElementById("previous").style.visibility = "visible";
        document.getElementById("next").style.visibility = "visible";
      }


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
        button.classList.add("set-btn");
        button.addEventListener("click", () => nameClick(name, button));
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
function nameClick(name, set) {
  // Filter cards that match that set
  var filter = response.data.filter((card) => card.name === name);

  // Display each card
  filter.forEach((card) => {
    const cardImage = document.createElement("img");
    cardImage.src = card.images.small;
    cardImage.classList.add("card-img");
    const cardItem = document.createElement("button");
    cardItem.textContent = `${card.name} ${card.subtypes}`;
    cardItem.classList.add("name-btn");
    cardItem.addEventListener("click", () => showDetail(card, cardImage));
    set.insertAdjacentElement("afterend", cardImage);
    set.insertAdjacentElement("afterend", cardItem);
  });
}

// Show details for card
function showDetail(card, cardImage) {

  // Reset results container
  const resultContainer = document.createElement("detail-container");

  // Name
  const name = document.createElement("h4");
  name.innerText = `${card.name} ${card.subtypes} Details`;
  name.classList.add("card-header");
  resultContainer.appendChild(name);

  // Add card to collection button
  const addCard = document.createElement("button");
  addCard.textContent = "Add to Collection"
  addCard.classList.add("center-btn");
  resultContainer.appendChild(addCard);
  // Event listener
  addCard.addEventListener("click", function(event) {
    console.log("adding to collection");
    addFavorites(card);
  });

  // Release date
  const release = document.createElement("p");
  release.innerText = `Release Date: ${card.set.releaseDate}`;
  release.classList.add("card-text");
  resultContainer.appendChild(release);

  // HP
  const hp = document.createElement("p");
  hp.innerText = `HP: ${card.hp}`;
  hp.classList.add("card-text");
  resultContainer.appendChild(hp);

  // Evolves from
  const evolves = document.createElement("p");
  evolves.innerText = `Evolves From: ${card.evolvesFrom}`;
  evolves.classList.add("card-text");
  resultContainer.appendChild(evolves);

  // Rules
  const rules = document.createElement("p");
  rules.innerText = `Rules: ${card.rules}`;
  rules.classList.add("card-text");
  resultContainer.appendChild(rules);

  // Flavor Text
  const flavor = document.createElement("p");
  flavor.innerText = `Flavor Text: ${card.flavorText}`;
  flavor.classList.add("card-text");
  resultContainer.appendChild(flavor);

  // Artist
  const artist = document.createElement("p");
  artist.innerText = `Artist: ${card.artist}`;
  artist.classList.add("card-text");
  resultContainer.appendChild(artist);

  // Total
  const printTotal = document.createElement("p");
  printTotal.innerText = `Total Printed: ${card.set.printedTotal}`;
  printTotal.classList.add("card-text");
  resultContainer.appendChild(printTotal);

  // Rarity
  const rarity = document.createElement("p");
  rarity.innerText = `Rarity: ${card.rarity}`;
  rarity.classList.add("card-text");
  resultContainer.appendChild(rarity);

  // Price
  const price = document.createElement("p");
  price.innerText = `Price: €${card.cardmarket.prices.averageSellPrice}`;
  price.classList.add("card-text");
  resultContainer.appendChild(price);

  cardImage.insertAdjacentElement("afterend", resultContainer);

}

function addFavorites(card) {
  // Prepare data to send
  cardName = card.name;
  cardYear = card.set.releaseDate;
  rarity = card.rarity;
  price = card.cardmarket.prices.averageSellPrice;

  data = {
    nameStr: cardName,
    yearStr: cardYear,
    rarityStr: rarity,
    priceStr: price
  };

  jsonData = JSON.stringify(data);

  // Request
  request = new XMLHttpRequest();
  request.open('POST', 'addfavorite.php', true);
  request.setRequestHeader('Content-Type', 'application/json');

  // Response
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      if (request.responseText == "Please login first") {
        alert(request.responseText);
      }
    }
    else {
      console.error("Error: ", request.statusText);
    }
  }
  request.send(jsonData);
}