var timeEl = document.querySelector("countdown");
var mainEl = document.getElementById("main");
var myQuestions;
var timeLeft;
var timeInterval;
var answerCorrect;
var answerIncorrect;

var startBtn = document.querySelector("#startQuiz");

function countdown() {

  timeLeft = 60;

  timeInterval = setInterval(function () {

    timerElement.textContent = "Time: " + timeLeft;

   if (timeLeft <= 0) {
    countdown();
  }

  timeLeft--;

  }, 1000);
}

function startQuiz () {

}
startBtn.addEventListener("click", startQuiz);
init();