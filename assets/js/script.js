var timeEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var startEl = document.querySelector("#startBox");
var endEl = document.querySelector("#endScreen");

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

questionEl.style.display = "none";
endEl.style.display = "none";

function startQuiz () {
  countdown ();

  startEl.style.display = "none";

  questionEl.style.display = "block";

}

const Questions = [{
  q: "sfdsf",
  a: [{text: "a", isCorrect: false},
    {text: "b", isCorrect: false},
    {text: "c", isCorrect: true},
    {text: "d", isCorrect: false}]
},
{
q: "sfdsf",
a: [{text: "a", isCorrect: false},
  {text: "b", isCorrect: false},
  {text: "c", isCorrect: true},
  {text: "d", isCorrect: false}]
},
{
  q: "sfdsf",
  a: [{text: "a", isCorrect: false},
    {text: "b", isCorrect: false},
    {text: "c", isCorrect: true},
    {text: "d", isCorrect: false}]
}
]

let currQuestion = 0
let score = 0

function loadQues() {
  const question = document.getElementById
}

function endQuiz (){
  endEl.style.display = "block"

}


startBtn.addEventListener("click", startQuiz);