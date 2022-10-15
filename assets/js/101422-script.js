// Create global variables
var timer        = 60,
    startQuizBtn = document.querySelector(".start"), // Must add "." or "#". Cannot read properties of null (reading 'addEventListener')
    timeEl       = document.querySelector(".timer"),
    newText      = document.getElementById("quiz");

console.log(newText);

// Update timer
function timerText() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;

        if (timer === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval); 
            //alert("Time's up!");
        }

    }, 1000); // 1 second
}

function startQuiz() {
    // store questions in array of objects
    var questions = [];
        questionOne = {
            question: "Commonly used data types DO NOT include:",
            answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
            anskey: "2. Booleans"
        },
        questionTwo = {
            question: "The condition in an if/else statement is enclosed within ______.",
            answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
            anskey: "3. parenthesis"
        },
        questionThree = {
            question: "Arrays in JavaScript can be used to store ______.",
            answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
            anskey: "4. all of the above"
        },
        questionFour = {
            question: "String values must be enclosed within ______ when being assigned to variables.",
            answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
            anskey: "3. quotes"
        },
        questionFive = {
            question: "A very usefull tool used during development and debugging for printing content to the debugger is:",
            answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
            anskey: "4. console.log"
        },
    questionEl = "",
    answerEl   = "";

    console.log(questions.push(questionOne));

    //newText.innerHTML = "";
    //newText.innerHTML += answerEl;
    //return;
}

/* 
All done! Your final score is *22*. Enter initials: input, submit
Highscores: 1. AB - 22 <go back> <clear highscores>
*/



// Attach event listener
startQuizBtn.addEventListener("click", function() {
    //timerText();
    startQuiz();
});