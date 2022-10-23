// Create global variables
var clearBtn     = document.querySelector(".clear"),
    timeEl       = document.querySelector(".timer"),
    startScreen  = document.getElementById("quiz-start"),
    endScreen    = document.getElementById("quiz-end"),
    quizWrap     = document.getElementById("qna"),
    quizQna      = document.getElementById("question"),
    validator    = document.getElementById("validator"),
    highScores   = document.getElementById("high-scores"),
    userInitials = document.getElementById("initials"),
    userScore    = document.getElementById("final-score"),
    optionsList  = document.getElementById("options");

// Counters
var timer = 59,
    count = 0,
    score = 0;

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

// Hide quiz, show save initials and score 
function endQuiz() {   
    // Stop timer
    timeEl.textContent = 0;
    timer = 0;

    // Need to calculate score based on correct answers
    userScore.innerHTML = score;
     
    quizWrap.style.display = "none";
    endScreen.style.display = "block";
}

// Get scores on page load
function init() {
    //showScores();
}

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

// Show all scores
function showScores() {     
    var savedScores = "",
        scoreItem   = "",
        scoreList   = document.querySelector(".score-list"),
        savedScores = JSON.parse(localStorage.getItem("allScores")),
        scoreWrap = document.getElementById("score-container");

    // Check if data is returned, if not exit out of the function
    if (savedScores !== null) {     
        // Limit list length
        if (scoreList.children.length < 5) {   
            scoreItem = "<li>" + savedScores.user + " - " + savedScores.score + "</li>";
            scoreList.innerHTML += scoreItem;
        }
    } else {
        scoreWrap.innerHTML = "<h3>Sorry. No scores available.</h3>";
        clearBtn.style.display = "none";
    }
    //console.log(savedScores + ", " + savedScores.user + ", " + savedScores.score);
    console.log(savedScores);
}

// Submit initials with score
function storeScore() {
    var allScores = [];
    
    // Save data as an object to local storage
    allScores = {
        user: userInitials.value,
        score: userScore.textContent
    };
    localStorage.setItem("allScores", JSON.stringify(allScores));
}

// Update timer
function timerText() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;

        if (timer === 0 || timer < 0) {
            // Stops execution of action at set interval
            timeEl.textContent = 0;
            clearInterval(timerInterval); 
            endQuiz();
        }
    }, 1000); // 1 second
}

// Event listeners

// Clear high scores
clearBtn.addEventListener("click", function() {
    window.localStorage.clear(); 
    document.getElementById("score-container").innerHTML = "<h3>Sorry. No scores available.</h3>";
    clearBtn.style.display = "none"; 
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
                timerText();
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
            storeScore();
        }   
    }    
});

// Go back to start quiz
document.querySelector(".reset").addEventListener("click", function() {  
    startScreen.style.display = "block";
    highScores.style.display = "none"; 
    timer = 59;
});

// Start quiz
document.querySelector(".start").addEventListener("click", function() {
    // Start timer
    timer = 59;
    timerText();
    nextPage(count);

    // Reset score
    score = 0;

    startScreen.style.display = "none";
    quizWrap.style.display = "block";
});

// Submit initials
document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();  

    if (userInitials.value === "") {
        alert("Please enter your initials.");
    } else {
        storeScore();
        showScores();
        
        userInitials.value = "";
        endScreen.style.display = "none";
        highScores.style.display = "block";
    }    
});

// Show high scores
document.querySelector(".scores").addEventListener("click", function(){     

    // Can't exit quiz once started    
    if (timeEl.textContent > 0) {
        alert("This action is unavailable at this time.");
    } else {
        startScreen.style.display = "none";
        quizWrap.style.display = "none";
        endScreen.style.display = "none";
        highScores.style.display = "block";
    }
});

// On page load
init();