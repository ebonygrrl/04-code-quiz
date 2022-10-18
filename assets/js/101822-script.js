// Create global variables
var timer        = 60,
    startQuizBtn = document.querySelector(".start"), // Must add "." or "#". Cannot read properties of null (reading 'addEventListener')
    timeEl       = document.querySelector(".timer"),
    newText      = document.getElementById("quiz"),
    validator    = document.getElementById("validator");

// console.log(newText);


// Store questions, choices and answers in array of objects
var item   = [
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
],
allQuestions = item.length,
questionEl   = "",
answerEl     = "",
keyEl        = "",
nextPage     = 1;

// Loop through array
for (var i=0; i < allQuestions; i++) {
    questionEl = "<h2>" + item[i].question + "</h2>";
    keyEl = item[i].anskey;

    for (var j=0; j < item[i].options.length; j++) {
        var option = item[i].options[j];
        if (option === keyEl) {
            answerEl += "<button id='answer' class='option'>" + [j + 1] + ". " + option + "</button>";
        } else {
            answerEl += "<button class='option'>" + [j + 1] + ". " + option + "</button>";
        }
    }

    //console.log(questionEl); // returns question
    //console.log("----------");
    //console.log(answerEl); // returns html for buttons
    //console.log("----------");
    //console.log(keyEl); // returns answer to question
    //console.log("----------");

    //nextPage = item[i+1];
    //console.log(nextPage);

    break;
}

var page = questionEl + "<br>" + answerEl;

// Listen event for selection
newText.addEventListener("click", function(e) { 
    e.preventDefault();

    if (e.target !== e.currentTarget) {
        if (e.target.id) {
            validator.innerHTML = "Correct!";
            validator.style.display = "block";
            console.log("Correct");
        } else {
            validator.innerHTML = "Wrong!";  
            validator.style.display = "block";        
            console.log("Wrong");
        }
    }
    newText.innerHTML = page;
    console.log(page);
    
    e.stopPropagation();
});

// Attach event listener
startQuizBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // Update CSS
    document.getElementById("quiz-start").style.display = "none";
    
    // Set up question and options
    newText.innerHTML = page;  

    timerText();
    //startQuiz();    
    //console.log("I've been clicked!");
    e.stopPropagation();
});

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


/* All done! Your final score is *22*. Enter initials: input, submit
Highscores: 1. AB - 22 <go back> <clear highscores>
*/