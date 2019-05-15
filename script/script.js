let remainingGuess = 10;

document.getElementById("remaining-guess").innerHTML = remainingGuess;

function guessingGame() {
  let guessInput = parseInt(document.getElementById("guess-input").value);
  let correctNumber = Math.floor(Math.random() * 100);

  if (remainingGuess == 0) {
    return document.getElementById("out-of-turn").innerHTML = "Out of turn. Press reset!";
  }
  if (guessInput < correctNumber) {
    guessOutcome = "Your number is too low";
    document.getElementById("guess-wrong").style.display = "block";
  }
  if (guessInput > correctNumber) {
    guessOutcome = "Your number is too high";
    document.getElementById("guess-wrong").style.display = "block";

  }
  if (guessInput == correctNumber) {
    document.getElementById("guess-success").style.display = "block";
  }

  document.getElementById("outcome").innerHTML = guessOutcome;
  document.getElementById("guess-input").value = "";
  document.getElementById("remaining-guess").innerHTML = parseInt(remainingGuess) - 1;

  remainingGuess -= 1;
}

function resetGame() {
  remainingGuess = 10;
  document.getElementById("remaining-guess").innerHTML = remainingGuess;
  document.getElementById("out-of-turn").innerHTML = " ";
  guessOutcome  = "";
  document.getElementById("guess-wrong").style.display = "none";
  document.getElementById("guess-success").style.display = "none";
}
