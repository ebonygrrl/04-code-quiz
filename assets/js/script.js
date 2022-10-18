// Create global variables
var startQuizBtn = document.querySelector(".start"), // Must add "." or "#". Cannot read properties of null (reading 'addEventListener')
    timeEl       = document.querySelector(".timer"),
    startScreen  = document.getElementById("quiz-start"),
    endScreen    = document.getElementById("quiz-end"),
    quizQna      = document.getElementById("quiz"),
    validator    = document.getElementById("validator"),
    highScores   = document.getElementById("high-scores");
    scoreList    = document.querySelector(".score-list");

var timer = 60;

// Store questions, choices and answers in array of objects
var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        anskey: "booleans"
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        anskey: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        anskey: "all of the above"
    },
    {
        question: "String values must be enclosed within when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        anskey: "quotes"
    },
    {
        question: "A very usefull tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        anskey: "console.log"
    },
];

// Get scores on page load
function init() {

}

// Subtract time for wrong answers
function penaltyTime() {

}

function checkAnswer(e) {
    if (e.target !== e.currentTarget) {
        if (e.target.id) {
            validator.innerHTML = "<p class='response'>Correct!</p>";
            validator.style.display = "block";
            console.log("Correct");
        } else {
            validator.innerHTML = "<p class='response'>Wrong!</p>";  
            validator.style.display = "block";        
            console.log("Wrong");
        }
    }
}

// Update timer
function timerText() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;

        // Penalty for wrong answer
        if (timer > 0) {
            penaltyTime();
        }

        if (timer === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval); 
            //alert("Time's up!");
            endQuiz();
        }

    }, 1000); // 1 second
}

// Start quiz
function startQuiz() {
    timerText();

}

// End quiz
function endQuiz() {
    storeScore();
}

// Go to next question
function nextPage() {
    checkAnswer();
    
}

// Submit initials with score
function storeScore() {
    
}

// Reset quiz - Go back button
function resetQuiz() {
    
}

// Clear all scores
function clearScores() {
    
}

// Event listeners

// Start quiz
startButton.addEventListener("click", startQuiz);

// Next question
answerButton.addEventListener("click", nextPage);

// Submit initials
submitButton.addEventListener("click", storeScore);

// Go back
resetButton.addEventListener("click", resetQuiz);

// Clear high scores
clearButton.addEventListener("click", clearScores);

