var timeEl = document.querySelector(".times");
var mainEl = document.getElementById("main");
var myQuestions

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

const myQuestions = [
    {
        question: "Commonly used data types DO not include:"
        choices: {"strings", "booleans", "alerts", "numbers"},
        answer: ""
    }

    {
        question:
        choices:
        answer:
    }

    {
        question:
        choices:
        answer:
    }
]