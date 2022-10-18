// Create global variables
var startQuizBtn = document.querySelector(".start"), // Must add "." or "#". Cannot read properties of null (reading 'addEventListener')
    timeEl       = document.querySelector(".timer"),
    newText      = document.getElementById("quiz"),
    validator    = document.getElementById("validator");

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
        anskey: 2
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        anskey: 3
    },
    {
        question: "String values must be enclosed within when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        anskey: 2
    },
    {
        question: "A very usefull tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        anskey: 3
    },
];

// Get scores on page load
function init() {

}

// Subtract time for wrong answers
function penaltyTime() {

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

}

// Go to next question
function nextPage() {
    
}

// Submit initials with score
function submitBtn() {
    
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
submitButton.addEventListener("click", submitBtn);

// Go back
resetButton.addEventListener("click", resetQuiz);

// Clear high scores
clearButton.addEventListener("click", clearScores);

