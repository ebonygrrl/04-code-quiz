// Create global variables
var startQuizBtn = document.querySelector(".start"), // Must add "." or "#". Cannot read properties of null (reading 'addEventListener')
    timeEl       = document.querySelector(".timer"),
    startScreen  = document.getElementById("quiz-start"),
    endScreen    = document.getElementById("quiz-end"),
    quizCont     = document.getElementById("qna"),
    quizQna      = document.getElementById("quiz"),
    validator    = document.getElementById("validator"),
    highScores   = document.getElementById("high-scores"),
    viewScores   = document.querySelector(".scores"),
    scoreList    = document.querySelector(".score-list"),
    userInitials = document.getElementById("initials"),
    userScore    = document.querySelector(".final-score"),
    submitBtn    = document.getElementById("submit"),
    resetBtn     = document.querySelector(".reset"),
    clearBtn     = document.querySelector(".clear");


var timer = 60;

var answerButton = document.querySelector(".option");

// Store questions, choices, answers and value of answer in array of objects
var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        anskey: "booleans",
        value: 20
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        anskey: "parenthesis",
        value: 20
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        anskey: "all of the above",
        value: 20
    },
    {
        question: "String values must be enclosed within when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        anskey: "quotes",
        value: 20
    },
    {
        question: "A very usefull tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        anskey: "console.log",
        value: 20
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

// Start quiz // WORKS!
function startQuiz() { 
    timerText();
    startScreen.style.display = "none";
    quizCont.style.display = "block";
}

// Hide quiz, show save initials and score 
function endQuiz() {
    quizCont.style.display = "none";
    endScreen.style.display = "block";

    // Need to calculate score based on correct answers

    // Save data as an object to browser
    var userScore = {
        user: userInitials.value,
        score: userScore.value
    };
    localStorage.setItem("user", JSON.stringify(userScore));
}

// Go to next question
function nextPage() {   
    // W3Guides
    var totalCount = 0,
        count      = 0;

    for (i=0; i < quiz.length; i++) {
        totalCount++;
    }

    quizQna.innerHTML  = "<h2>" + quiz[0].question + "</h2>";

    for (j=0; i < quiz.options.length; j++) {
        quizQna.innerHTML += "<ol>" + quiz[count].options[j] + "</ol>";
    }

    checkAnswer();   
}

// Submit initials with score
function storeScore() {
    // Need to calculate score based on correct answers
}

// Show all scores
function showScores() {  
    console.log(timeEl.textContent);
    if (timeEl.textContent > 0) {
        alert("This action is unavailable at this time.");
    } else {
        startScreen.style.display = "none";
        quizCont.style.display = "none";
        endScreen.style.display = "none";
        highScores.style.display = "block";    
    }
}

// Reset quiz - Go back button // WORKS!
function resetQuiz() {    
    startScreen.style.display = "block";
    highScores.style.display = "none";    
}

// Clear all scores
function clearScores() {
    
}

// Event listeners

// Start quiz
viewScores.addEventListener("click", showScores);

startQuizBtn.addEventListener("click", startQuiz);
/*
// Next question
answerButton.addEventListener("click", nextPage);

// Submit initials
submitBtn.addEventListener("click", storeScore);
*/
// Go back to start quiz
resetBtn.addEventListener("click", resetQuiz);

// Clear high scores
clearBtn.addEventListener("click", clearScores);

