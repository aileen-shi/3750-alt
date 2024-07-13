// Current word
let answer = "";
let wrong = 1;
let index = 0;
let right = 0;

function startGame() {
  // Fetch a new word from the server
  fetch("getWord.php")
    .then((response) => response.json())
    .then((data) => {
      if (data.word) {
        data.word = data.word.toUpperCase();
        answer = data.word;
        setupGame(data.word);
      } else {
        console.error("Error fetching word:", data.error);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function setupGame(word) {
  // Check if cheat mode enabled
  if (document.getElementById("cheat").checked) {
    alert(word);
  }
  // Initial image
  const image = document.getElementById("player");
  // Create if doesnt exist
  if (image == null) {
    const newImage = document.createElement("img");
    newImage.id = "player";
    newImage.src = "1.png";
    document.getElementById("image-container").appendChild(newImage);
  } else {
    image.src = "1.png";
  }

  const wordToGuess = document.getElementById("wordToGuess");
  wordToGuess.innerHTML = "_ ".repeat(word.length).trim();
  generateLetterButtons();
}

function generateLetterButtons() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersDiv = document.getElementById("letters");
  lettersDiv.style.backgroundColor = "#b8b9ba";
  lettersDiv.innerHTML = ""; // Clear previous buttons
  letters.split("").forEach((letter) => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.onclick = () => guessLetter(letter);
    lettersDiv.appendChild(button);
  });
}

function guessLetter(letter) {
  const image = document.getElementById("player");
  const wordToGuess = document.getElementById("wordToGuess");
  console.log(answer[index]);

  // Incorrect guess
  if (letter != answer[right]) {
    wrong++;
    // Update image
    image.src = wrong + ".png";
    console.log("incorrect ", letter);
    console.log();
    // Game over
    if (wrong == 11) {
      alert("GAME OVER");
    }
  }
  // Correct
  else {
    right++;
    let remaining = "";
    for (let i = 0; i < answer.length; i++) {
      if (i < right) {
        remaining += answer[i];
      } else {
        remaining += " _";
        console.log(remaining[i]);
      }
    }
    console.log(remaining);
    wordToGuess.innerHTML = remaining;
    if (right == answer.length) {
      alert("YOU WIN");
    }
  }
}

// Initially start the game
//startGame();
