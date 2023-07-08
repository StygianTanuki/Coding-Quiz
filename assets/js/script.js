var timeEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var startEl = document.querySelector("#startBox");
var endEl = document.querySelector("#endScreen");
var isCorrectEl = document.querySelector("#isCorrect");

var questionEl = document.querySelector("#quizBox");
var questionCardEl = document.querySelector("#questionCard")


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

  loadQues ()
}

const Questions = [{
  q: "Commonly used data types DO not include:",
  a: [{text: "strings", isCorrect: false},
    {text: "booleans", isCorrect: false},
    {text: "alerts", isCorrect: true},
    {text: "numbers", isCorrect: false}]
},
{
q: "Arrays in JavaScript can be used to store____.",
a: [{text: "numbers and strings", isCorrect: false},
  {text: "other arrays", isCorrect: false},
  {text: "booleans", isCorrect: false},
  {text: "all of the above", isCorrect: true}]
},
{
  q: "A very useful tool used during development and debugging for printing content to the debugger is:",
  a: [{text: "JavaScript", isCorrect: false},
    {text: "terminal/bash", isCorrect: false},
    {text: "for loops", isCorrect: false},
    {text: "console.log", isCorrect: true}]
},
{
  q: "String values must be enclosed within ___ when being assinged to variables",
  a: [{text: "commas", isCorrect: false},
    {text: "curly brackets", isCorrect: false},
    {text: "quotes", isCorrect: true},
    {text: "parentheses", isCorrect: false}]
},
{
  q: "The condition in an if/else statement is enclosed within _____.",
  a: [{text: "quotes", isCorrect: false},
    {text: "curly brackets", isCorrect: false},
    {text: "parentheses", isCorrect: true},
    {text: "square brackets", isCorrect: true}]
  }
]

let currQuestion = 0
let score = 0

function loadQues() {
  questionCardEl.innerHTML = "";

  let current = Questions [ currQuestion];

  let questionHeader = document.createElement("h2");
  questionHeader.setAttribute("class", "question-header");
  questionHeader.textContent = current.q;

  let questionList = document.createElement("ul");
  questionList.setAttribute("class", "question-footer");

  for(let i = 0; i < current.a.length; i++) {
    let answerItem = document.createElement("button");
    answerItem.textContent = current.a[i].text;
    answerItem.setAttribute("data-isCorrect", current.a[i].isCorrect);

    questionList.appendChild(answerItem);

  }

  //This will reset each card and choice
  questionCardEl.appendChild(questionHeader);
  questionCardEl.appendChild(questionList);
}

  questionCardEl.addEventListener("click", function(event) {
    let element = event.target;

    if (!element.matches("button")) {
      return;
    }
    let isCorrect = element.getAttribute("data-isCorrect");
    if (isCorrect) {
      isCorrectEl.textContent = "Correct!"
    } else {
      isCorrectEl.textContent = "incorr";
      timeLeft -= 10;
    }

    currQuestion++;
    if(currQuestion < Questions.length) {
      loadQues();
    } else {
      endQuiz();
    }
  })

function endQuiz (){
  endEl.style.display = "block"
  clearInterval(timeInterval)
  localStorage.setItem("new-score", timeLeft);
  
  window.location.href = "highscores.html";
}


startBtn.addEventListener("click", startQuiz);