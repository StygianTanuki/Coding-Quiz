var form = document.querySelector("form");
var formInput = document.querySelector("#initials");
var currentScores;
var scoresBox = document.querySelector("#scoresBox");

function showScores () {
    scoresBox.innerHTML = "";

    currentScores = JSON.parse(localStorage.getItem("scores"));

    for (let i = 0; i < currentScores.length; i++) {
        let scoreItem = document.createElement("li");

        let scoreInitials = document.createElement("p");
        scoreInitials.textContent = currentScores[i].initials;

        let scoreTime = document.createElement("p");
        scoreTime.textContent = currentScores[i].score;

        scoreItem.appendChild(scoreInitials);
        scoreItem.appendChild(scoreTime);

        scoresBox.appendChild(scoreItem);
    }
}

if (JSON.parse(localStorage.getItem("new-score")) == -1){
    form.style.display ="none";
    showScores();
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    currentScores = JSON.parse(localStorage.getItem("scores"));
    if (currentScores === null) {
        console.log(currentScores);
        currentScores = [];
    }

    let newScore = JSON.parse(localStorage.getItem("new-score"))

    let newObject = {
        initials: formInput.value.trim(),
        score: newScore
    }

    currentScores.push(newObject);

    localStorage.setItem("scores", JSON.stringify(currentScores));

    form.style.display = "none";

    showScores();
})