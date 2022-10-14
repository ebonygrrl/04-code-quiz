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
    var item   = [
        {
            question: "Commonly used data types DO NOT include:",
            answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
            anskey: "Booleans"
        },
        {
            question: "The condition in an if/else statement is enclosed within ______.",
            answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
            anskey: "Booleans"
        },
        {
            question: "Arrays in JavaScript can be used to store _____.",
            answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
            anskey: "Booleans"
        },
        {
            question: "Commonly used data types DO NOT include:",
            answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
            anskey: "Booleans"
        },
        {
            question: "Commonly used data types DO NOT include:",
            answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
            anskey: "Booleans"
        }
    ],
    questionEl = "<h2>" + item.question + "</h2>",
    answerEl   = "";

    

    for (i=0; i < item.length; i++) {
        answerEl += "<button class='answer'>" + item[i]+ "</button>";
    }

    newText.innerHTML = questionEl;
    newText.innerHTML += answerEl;    

    var answerBtn = document.querySelector(".answer");

    answerBtn.addEventListener("click", function() {
        console.log(item["answers"]);
/*
        if (this.item[answers] === item.key) {            
            document.getElementById("validator").innerHTML = "Correct!";
            console.log("Correct");
        } else {
            document.getElementById("validator").innerHTML = "Wrong!";            
            console.log("Wrong");
        }*/

    });
}
//console.log(newText.innerHTML + "after");



// Attach event listener
startQuizBtn.addEventListener("click", function() {
    timerText();
    startQuiz();
    //console.log("I've been clicked!");
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