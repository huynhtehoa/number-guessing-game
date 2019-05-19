let randomNumber = Math.floor(Math.random() * 100);
let guessInput;
let remainingGuess = 10;
let arrayHistory = new Array();
let currentGame = 0;
arrayHistory.push(new Array(10));
let tempArray = [];
let totalScore = 10;
let scoreArray = [];
scoreArray.push(totalScore);

document.getElementById("remaining-guess").innerHTML = remainingGuess;

function formatOutcome(guessOutcome, guessDisplay, guessClass, guessText) {
  document.getElementById("outcome").innerHTML = guessOutcome;
  document.getElementById("guess-alert").style.display = guessDisplay;
  document.getElementById("guess-alert").className = guessClass;
  document.getElementById("guess-alert").innerHTML = guessText;
}

function guessingGame() {
  guessInput = document.getElementById("guess-input").value;
  if (guessInput == randomNumber) {
    formatOutcome("SUCCESS", "block", "alert-success", "CORRECT");
  } else if (guessInput > randomNumber) {
    formatOutcome("Your guess is too high", "block", "alert-warning", "INCORRECT");
    scoreArray[currentGame] -= 1; 
  } else {
    formatOutcome("Your guess is too low", "block", "alert-warning", "INCORRECT");
    scoreArray[currentGame] -= 1;
  }

  remainingGuess -= 1;

  saveHistory();

  document.getElementById("remaining-guess").innerHTML = remainingGuess;

  document.getElementById("guess-input").value = "";

  finishGame();
}

function maxScore() {
  return Math.max(...scoreArray);
}

function saveHistory() {
  if (!isDuplicated()) {
    tempArray.push(guessInput);
  } else {
    remainingGuess += 1;
  }
  
  for (let i = 0; i < tempArray.length; i++) {
    arrayHistory[currentGame][i] = tempArray[i];
  }
  document.getElementById("history").innerHTML = "";
  for (let i = 0; i <= currentGame; i++) {
    for (let j = 0; j < arrayHistory[i].length; j++) {
      if (typeof arrayHistory[i][j] !== "undefined") {
        document.getElementById("history").innerHTML += arrayHistory[i][j] + " ";
      }
    }
    document.getElementById("history").innerHTML += `Score: ${scoreArray[i]}`;
    document.getElementById("history").innerHTML += "<br>";
  }
}

function isDuplicated() {
  for (let i = 0; i < tempArray.length; i++) {
    if (guessInput == tempArray[i]) {
      return true;
    }
  }
  return false;
}

function finishGame() {
  if (remainingGuess == 0) {
    alert("Out of guess. Next round...");
    return gameOver();
  } else if (guessInput == randomNumber) {
    alert("Congratulations! You finish the game. Next round...");
    return gameOver();
  }
}

function gameOver() {
  randomNumber = Math.floor(Math.random() * 100);
  document.getElementById("remaining-guess").innerHTML = 10;
  remainingGuess = 10;
  formatOutcome("", "none");
  document.getElementById("guess-input").value = "";
  tempArray = [];
  arrayHistory.push(new Array(10));
  currentGame++;
  totalScore = 10;
  document.getElementById("score").innerHTML = maxScore();
  scoreArray.push(totalScore) ;
}

function resetGame() {
  location.reload();
}
