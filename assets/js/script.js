var timeEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var startEl = document.querySelector("#startBox");

var questionEl = document.querySelector("#quizBox");


var myQuestions;
var timeLeft;
var timeInterval;
var answerCorrect;
var answerIncorrect;

var startBtn = document.querySelector("#startQuiz");

function countdown() {

  timeLeft = 60;

  timeInterval = setInterval(function () {

    timeEl.textContent = "Time: " + timeLeft;

   if (timeLeft <= 0) {
    clearInterval(timeInterval);
  }

  timeLeft--;

  }, 1000);
}



function startQuiz () {
  countdown ();

  startEl.style.display = "none"


}

startBtn.addEventListener("click", startQuiz);