// Create global variables
var timer = 60;
var startQuizBtn = document.querySelector(".start"); // Must add "." or "#". Cannot read properties of null (reading 'addEventListener')
var timeEl = document.querySelector(".timer");

// Update timer
function timerText() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;

        if (timer === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval); 
            alert("Time's up!");
        }

    }, 1000); // 1 second
}

function startQuiz() {
    var quiz = [];

    var item = {
        question: "Commonly used data types DO NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        key: "Booleans"
    }


}

// Attach event listener
startQuizBtn.addEventListener("click", function() {
    timerText();
    startQuiz();
    console.log("I've been clicked!");
});




/* 
Questions
1. Commonly used data types DO NOT include: strings, booleans, alerts, numbers
2. The condition in an if/else statement is enclosed within ______. : quotes, curly brackets, parenthesis, square brackets
3. Arrays in JavaScript can be used to store _____. : numbers and strings, other arrays, booleans, all of the above
4. String values must be enclosed within when being assigned to variables. : commas, curly brackets, quotes, parenthesis
5. A very usefull tool used during development and debugging for printing content to the debugger is: JavaScript, terminal/bash, for loops, console.log
All done! Your final score is *22*. Enter initials: input, submit
Highscores: 1. AB - 22 <go back> <clear highscores>
*/