// Create global variables
var startQuizBtn = document.querySelector(".start"), // Must add "." or "#". Cannot read properties of null (reading 'addEventListener')
    timeEl       = document.querySelector(".timer"),
    startScreen  = document.getElementById("quiz-start"),
    endScreen    = document.getElementById("quiz-end"),
    quizCont     = document.getElementById("qna"),
    quizQna      = document.getElementById("question"),
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

// Counters
var timer = 0,
    count = 0,
    score = 0;

// Local storage variables
var allScores = [],
    savedScores = "";

// Store questions, choices, answers and value of answer in array of objects
var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        anskey: "alerts"
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

// Go to next question
function nextPage(index) {  
    var questionTxt = "",
        optionTxt = "";    

    questionTxt  = "<h2>" + quiz[index].question + "</h2>";
    
    quizQna.innerHTML = questionTxt;

    for (j=0; j < quiz[index].options.length; j++) {
        if (quiz[index].options[j] === quiz[index].anskey) {
            optionTxt += "<li id='answer' class='option'>" + quiz[index].options[j] + "</li>";
        } else {
            optionTxt += "<li class='option'>" + quiz[index].options[j] + "</li>";
        }
    }
    optionsList.innerHTML = optionTxt;
}

// Update timer
function timerText() {
    timer = 59;

    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;

        if (timer === 0 || timeEl.textContent === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval); 
            endQuiz();
        }

    }, 1000); // 1 second
}

// Start quiz // WORKS!
function startQuiz() { 
    // Start timer
    timerText();

    startScreen.style.display = "none";
    quizCont.style.display = "block";
}

// Hide quiz, show save initials and score 
function endQuiz() {     
    // Stop timer
    timeEl.textContent = "0";
    timer = 0;
    clearInterval(timerInterval);

    // Need to calculate score based on correct answers
    userScore.innerHTML = score;
     
    quizCont.style.display = "none";
    endScreen.style.display = "block";
}

// Submit initials with score
function storeScore() {
    // Save data as an object to browser
    allScores = {
        user: userInitials.value,
        score: userScore.textContent
    };
    localStorage.setItem("allScores", JSON.stringify(allScores));
}

function getScores() {  
}

// Show all scores
function showScores() {     
    var scoreItem = "",
        savedScores = JSON.parse(localStorage.getItem("allScores"));
    
    scoreItem = "<li>" + savedScores.user + " - " + savedScores.score + "</li>";  

    console.log(scoreList.children);

    // Check if data is returned, if not exit out of the function
    if (savedScores !== null) {
        // Limit list length
        if (scoreList.children.length < 5) {   
            scoreList.innerHTML += scoreItem;
        }
    }  
    
    // Check if data is returned, if not exit out of the function
    if (savedScores === null) {
        document.getElementById("score-container").innerHTML = "<h3>Sorry. No scores available.</h3>";
        clearBtn.style.display = "none";
    }
    // Can't exit quiz once started    
    if (timeEl.textContent > 0) {
        alert("This action is unavailable at this time.");
    } else {
        startScreen.style.display = "none";
        quizCont.style.display = "none";
        endScreen.style.display = "none";
        highScores.style.display = "block";    
    }
}

// Reset quiz - Go back button 
function resetQuiz() {    
    nextPage(count);

    startScreen.style.display = "block";
    highScores.style.display = "none"; 
}

// Clear all scores
function clearScores() {
    window.localStorage.clear(); 
    document.getElementById("score-container").innerHTML = "<h3>Sorry. No scores available.</h3>";
    clearBtn.style.display = "none"; 
}

// Event listeners

viewScores.addEventListener("click", showScores);

// Start quiz
startQuizBtn.addEventListener("click", startQuiz);

// Go back to start quiz
resetBtn.addEventListener("click", resetQuiz);

// Clear high scores
clearBtn.addEventListener("click", clearScores);

// Submit initials
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    storeScore();
    
    //getScores();
    showScores();

    userInitials.value = "";
});

// Check answers and skip to next question
optionsList.addEventListener("click", function(e) {
    if (e.target !== e.currentTarget) {        
        if (e.target.id === 'answer') {
            validator.innerHTML = "<p class='response'>Correct!</p>";
            validator.style.display = "block";
            if (score < 100) {
                score += 20; // Add to total score
            }
        } else {
            validator.innerHTML = "<p class='response'>Wrong!</p>";  
            validator.style.display = "block";
            // Avoid negative timer
            if (timer <= 10) {
                timerText.textContent = "0";
                timer = 0;
            } else {
                timer -= 10; // Penalty for wrong answer
            }
        }

        // Increase count for question index
        count += 1;
    
        if (count < quiz.length) {
            nextPage(count);
        } else {         
            endQuiz();
        }
    }
});

// Get scores on page load
function init() {
    // Reset quiz to 0
    nextPage(count);

    // Check localStorage for values
    /*if (savedScores !== null) {
        allScores = savedScores;
    }*/
    console.log(allScores.length);
}

// On page load
init();