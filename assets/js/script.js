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
    answerButton = document.querySelector(".option");

// Counters
var timer = 59,
    count = 0,
    score = 0,
    timerInterval;

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

// Get scores on page load
function init() {
    var savedScore = JSON.parse(localStorage.getItem("userFinalScore"));

    if (savedScore !== null) {
        allScores = savedScore;
    }

    nextPage(count);
}

// Go to next question
function nextPage(index) {  
    var output = "";    

    //console.log(count, quiz[index]);

    output  = "<h2>" + quiz[index].question + "</h2>";
    output += "<ol id='options' class='options'>";

    for (j=0; j < quiz[index].options.length; j++) {
        if (quiz[index].options[j] === quiz[index].anskey) {
            output += "<li id='answer' class='option'>" + quiz[index].options[j] + "</li>";
        } else {
            output += "<li class='option'>" + quiz[index].options[j] + "</li>";
        }
    }
    output += "</ol>";
    
    quizQna.innerHTML = output;
}

// Update timer
function timerText() {
    timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;

        if (timer === 0 || timeEl.textContent === 0) {
            //alert("Time's up!");
            // Stops execution of action at set interval
            clearInterval(timerInterval); 
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
    // Stop timer
    timeEl.textContent = "0";
    clearInterval(timerInterval);

    // Need to calculate score based on correct answers
    userScore.innerHTML = score;
     
    quizCont.style.display = "none";
    endScreen.style.display = "block";
}

// Submit initials with score
function storeScore() {

    // Save data as an object to browser
    allScores = [{
        user: userInitials.value,
        score: userScore.textContent
    }];
    localStorage.setItem("allScores", JSON.stringify(allScores));
}

// Show all scores
function showScores() {  
    // Can't exit quiz once started    
    if (timeEl.textContent > 0) {
        alert("This action is unavailable at this time.");
    } else {
        startScreen.style.display = "none";
        quizCont.style.display = "none";
        endScreen.style.display = "none";
        highScores.style.display = "block";    
    }
    
    // Use JSON.parse() to convert text to JavaScript object
    var savedScore = JSON.parse(localStorage.getItem("allScores"));

    console.log(savedScore);

    // Check if data is returned, if not exit out of the function
    if (savedScore !== null) {
        document.querySelector(".score-list").innerHTML += "<li>" + savedScore.user + " - " + savedScore.score + "</li>";
    } else {
        return;
    }
}

// Reset quiz - Go back button // WORKS!
function resetQuiz() {    
    startScreen.style.display = "block";
    highScores.style.display = "none";    
}

// Clear all scores
function clearScores() {
    var savedScore = JSON.parse(localStorage.getItem("userFinalScore"));

    if (savedScore !== "") {
        document.querySelector(".score-list li").innerHTML = "";
    } else {
        return;
    }    
}

// Event listeners

// Start quiz
viewScores.addEventListener("click", showScores);

startQuizBtn.addEventListener("click", startQuiz);

// Submit initials
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    storeScore();
    showScores();
});

// Go back to start quiz
resetBtn.addEventListener("click", resetQuiz);

// Clear high scores
clearBtn.addEventListener("click", clearScores);

// Check answers and skip to next question
quizCont.addEventListener("click", function(e) {
    if (e.target !== e.currentTarget) {
        //console.log(e.target.textContent);
        if (e.target.id === 'answer') {
            validator.innerHTML = "<p class='response'>Correct!</p>";
            validator.style.display = "block";
            score += 20; // Add to total score
        } else {
            validator.innerHTML = "<p class='response'>Wrong!</p>";  
            validator.style.display = "block";
            timer -= 10; // Penalty for wrong answer
        }
    }

    // Increase count for index
    count += 1;

    if (count < quiz.length) {
        nextPage(count);
    } else {         
        endQuiz();
    }
});

// initial function
init();