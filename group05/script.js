// Current word
let answer = "";
let wrong = 0;
let index = 0;
let right = 0;

function startGame() {
  // Fetch a new word from the server
  fetch("getWord.php")
    .then((response) => response.json())
    .then((data) => {
      if (data.word) {
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
  const image = document.createElement("img");
  image.id = "player";
  image.src = "1.png";

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
    // Game over
    if (wrong == 11) {
      alert("GAME OVER");
    }
  }
  // Correct
  else {
    right++;
    let remaining = answer;
    for (let i = right; i < answer.length; i++) {
      remaining[i] = " _";
    }
    wordToGuess.innerHTML = remaining;
    if (right == answer.length) {
      alert("YOU WIN");
    }
  }
}

// Initially start the game
//startGame();
