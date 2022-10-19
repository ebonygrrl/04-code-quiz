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
    userScore    = document.getElementById("final-score"),
    submitBtn    = document.getElementById("submit"),
    resetBtn     = document.querySelector(".reset"),
    clearBtn     = document.querySelector(".clear"),
    optionsList  = document.getElementById("options"),
    selectOpt    = document.getElementById("answer");


var timer = 60;

var answerButton = document.querySelector(".option");

// Store questions, choices, answers and value of answer in array of objects
var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        anskey: "alerts",
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

var totalCount = 0,
    count      = 0,
    keyEl      = "",
    output     = "";

// Get scores on page load
function init() {

}

// Update timer
function timerText() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;

        if (timer === 0) {
            //alert("Time's up!");
            // Stops execution of action at set interval
            clearInterval(timerInterval); 
            //endQuiz();
        }

    }, 1000); // 1 second
}

// Start quiz // WORKS!
function startQuiz() { 
    timerText();
    nextPage();
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
    var query = quiz[count];

    for (i=0; i < quiz.length; i++) {
             
        totalCount = quiz.length;

        keyEl = quiz[count].anskey;

        if (i <= totalCount) {         
            totalCount++;            
        }

        output  = "<h2>" + query.question + "</h2>";
        output += "<ol id='options' class='options'>";

        for (j=0; j < query.options.length; j++) {
            if (query.options[j] === keyEl) {
                output += "<li id='answer' class='option'>" + query.options[j] + "</li>";
            } else {
                output += "<li class='option'>" + query.options[j] + "</li>";
            }
        }
        output += "</ol>";
    }

    console.log(keyEl);
    quizQna.innerHTML = output;
 /*   
    checkAnswer();      
}

// Check answers
function checkAnswer() {  */
    quizCont.addEventListener("click", function(e) {
        e.preventDefault();
                
        if (e.target !== e.currentTarget) {
            console.log(e.target.textContent);
            if (e.target.textContent === keyEl) {
                validator.innerHTML = "<p class='response'>Correct!</p>";
                validator.style.display = "block";
            } else {
                validator.innerHTML = "<p class='response'>Wrong!</p>";  
                validator.style.display = "block";
                //timerText(10);     
            }
        }

        if (count <= totalCount--) {
            //console.log("Count: " + count + ", Loop totalCount: " + totalCount);
            nextPage();
        } else {
            //endQuiz();
        }

        //e.stopPropagation();
    });
}

// Submit initials with score
function storeScore() {
    // Need to calculate score based on correct answers
}

// Show all scores
function showScores() {  
    //console.log(timeEl.textContent);
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

