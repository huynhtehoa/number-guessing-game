let remainingGuess = 10;

document.getElementById("remaining-guess").innerHTML = remainingGuess;

let correctNumber = Math.floor(Math.random() * 100);

function guessingGame() {
  let guessOutcome;
  let displayCorrect;
  let displayWrong;

  let guessInput = parseInt(document.getElementById("guess-input").value);

  if (remainingGuess == 0) {
    return document.getElementById("out-of-turn").innerHTML = "No more turn. Press Alt + F4!";
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
  document.getElementById("guess-wrong").style.display =  displayWrong;
  document.getElementById("guess-success").style.display = displayCorrect;
  document.getElementById("outcome").innerHTML = guessOutcome;
  document.getElementById("guess-input").value = "";
  document.getElementById("remaining-guess").innerHTML = parseInt(remainingGuess) - 1;

  remainingGuess -= 1;

//output history
  let arrayHistory = []

  arrayHistory.push(guessInput)

  arrayHistory.forEach(function(element) {
    
    if (element == guessInput) {
      console.log("fuckyou")
    }

    document.getElementById("history").innerHTML += element + " "
  } 
  )
}



function resetGame() {
  remainingGuess = 10;
  document.getElementById("remaining-guess").innerHTML = remainingGuess;
  document.getElementById("out-of-turn").innerHTML = "";
  document.getElementById("outcome").innerHTML = "";
  document.getElementById("guess-wrong").style.display = "none";
  document.getElementById("guess-success").style.display = "none";
}
