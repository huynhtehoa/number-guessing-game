let remainingGuess = 10;

document.getElementById("remaining-guess").innerHTML = remainingGuess;

let correctNumber = Math.floor(Math.random() * 100);

function guessingGame() {
  let guessOutcome;
  let displayCorrect;
  let displayWrong;

  let guessInput = parseInt(document.getElementById("guess-input").value);

  if (remainingGuess == 0) {
    return (document.getElementById("out-of-turn").innerHTML =
      "No more turn. Press Alt + F4!");
  }
  if (guessInput < correctNumber) {
    guessOutcome = "Your number is too low";
    displayWrong = "block";
    displayCorrect = "none";
  }
  if (guessInput > correctNumber) {
    guessOutcome = "Your number is too high";
    displayWrong = "block";
    displayCorrect = "none";
  }
  if (guessInput == correctNumber) {
    displayCorrect = "block";
    displayWrong = "none";
  }
  document.getElementById("guess-wrong").style.display = displayWrong;
  document.getElementById("guess-success").style.display = displayCorrect;
  document.getElementById("outcome").innerHTML = guessOutcome;
  document.getElementById("guess-input").value = "";

  //output history & check duplicated
  
  let guessHistory = [];

  duplicatedHistory = false;

  for (let i=0; i<guessHistory.length; i++) {
    if (guessInput == guessHistory[i]) {
      duplicatedHistory = true;
      alert("History Duplicated");
      break;
    }
  };

  if (duplicatedHistory == false) {
    remainingGuess -= 1;
    document.getElementById("remaining-guess").innerHTML = remainingGuess;
  }

  guessHistory.push(guessInput);

  document.getElementById("history").innerHTML = "";

  for (let i=0; i<guessHistory.length; i++) {
  document.getElementById("history").innerHTML += guessHistory[i] + " ";
  }
};

function resetGame() {
  guessHistory = []
  remainingGuess = 10;
  document.getElementById("remaining-guess").innerHTML = remainingGuess;
  document.getElementById("out-of-turn").innerHTML = "";
  document.getElementById("outcome").innerHTML = "";
  document.getElementById("guess-wrong").style.display = "none";
  document.getElementById("guess-success").style.display = "none";
  document.getElementById("history").innerHTML = "";
};