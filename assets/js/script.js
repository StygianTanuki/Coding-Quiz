var timeEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var startEl = document.querySelector("#startBox");
var endEl = document.querySelector("#endScreen");
var isCorrectEl = document.querySelector("#isCorrect");

var highScoresEl = document.querySelector("#scoreHigh");

var questionEl = document.querySelector("#quizBox");
var questionCardEl = document.querySelector("#questionCard")


var myQuestions;
var timeLeft;
var timeInterval;
var answerCorrect;
var answerIncorrect;

var startBtn = document.querySelector("#startQuiz");

// Hides both the question card and end card when not in use
questionEl.style.display = "none";
endEl.style.display = "none";

// Allows the countodown to begin when the button is pressed and shows how much time is left

//Starts the process for the entire quiz
function startQuiz () {
  countdown ();

  startEl.style.display = "none";

  questionEl.style.display = "block";

  loadQues ()
}

function countdown() {
  timeLeft = 60;
  timeInterval = setInterval(function () {

    timeEl.textContent = "Time: " + timeLeft;

    // Records the time left and stores it
   if (timeLeft <= 0) {
    clearInterval(timeInterval);
    localStorage.setItem("new-score", -1);

    // This is recorded into the highscores.html
    window.location.href = "highscores.html";
  }

  timeLeft--;

  }, 1000);
}



// Question array with the answers. This shows which answer is correct out of the choices as well.
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

// This allows the current question and score to be at 0 before the game starts
let currQuestion = 0
let score = 0

//This loads the questions line by line and matches with its answers
function loadQues() {
  questionCardEl.innerHTML = "";

  // This shows the current questions
  let current = Questions [ currQuestion];

  //This displays the current question in the h2
  let questionHeader = document.createElement("h2");
  questionHeader.setAttribute("class", "question-header");
  questionHeader.textContent = current.q;

  let questionList = document.createElement("ul");
  questionList.setAttribute("class", "question-footer");

  
  // This allows the answers to be put onto the screen with their own buttons. The buttons populate with however many there are
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

//This allows for each time the button is clicked to be recorded
  questionCardEl.addEventListener("click", function(event) {
    let element = event.target;

    if (!element.matches("button")) {
      return;
    }
    let isCorrect = element.getAttribute("data-isCorrect");

    //This shows that if the answer chosen is correct it will be show the Correct response
    // However, if the answer was incorrect it will deisplay the other repsonse
    if (isCorrect === "true") {
      isCorrectEl.textContent = "Correct!"
    } else {
      isCorrectEl.textContent = "Incorrect.";
      timeLeft -= 10;
    }

    // This keeps track of what question the game is on
    currQuestion++;
    if(currQuestion < Questions.length) {
      loadQues();
      //If there are no more questions the game will end
    } else {
      endQuiz();
    }
  })

  //This will show the endQuiz function and allow the other screen to clear
function endQuiz (){
  endEl.style.display = "block"
  clearInterval(timeInterval)
  localStorage.setItem("new-score", timeLeft);
  
  //The logged information will be put into the highscores html
  window.location.href = "highscores.html";
}

// This button is for the highscores button so you are able to click and view the current high scores
highScoresEl.addEventListener("click", function() {
  clearInterval(timeInterval);
  localStorage.setItem("new-score", -1);

  window.location.href = "highscores.html";
})

// This allows for the game to start
startBtn.addEventListener("click", startQuiz);