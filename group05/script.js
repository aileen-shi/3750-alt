/*
  Aileen Shi
  CPSC 3750
  7/12/24
  Hangman
*/
// Current word
let answer = "";
let guess = "";
let wrong = 1;
let right = 0;
let attempted = [];

// Start game
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

  // Reset global variables
  right = 0;
  wrong = 1;
  guess = "";
  attempted = [];
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
  guess = "_".repeat(answer.length);
  generateLetterButtons();
}

// Generate letters
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

// Guess letter
function guessLetter(letter) {
  const image = document.getElementById("player");
  const wordToGuess = document.getElementById("wordToGuess");

  // Check if new guess
  if (!attempted.includes(letter)) {
    console.log("guess = ", guess);
    // Add to attempted list
    attempted.push(letter);

    // Incorrect guess
    if (!answer.includes(letter)) {
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
      let update = "";
      let guessSpace = "";
      for (let i = 0; i < answer.length; i++) {
        console.log(update, " answer[i] ", answer[i], " guess[i]", guess[i]);
        if (answer[i] == letter) {
          right++;
          update += letter;
          guessSpace += letter;
        } else {
          update += guess[i];
          guessSpace += guess[i];
          console.log(guess[i]);
        }
        guessSpace += " ";
      }
      guess = update;
      console.log(guess);
      wordToGuess.innerHTML = guessSpace;
      if (right == answer.length) {
        alert("YOU WIN");
      }
    }
  }
}
