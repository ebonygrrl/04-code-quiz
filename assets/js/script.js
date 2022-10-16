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

var item   = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        anskey: 1
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
questionEl = "",
answerEl   = "",
keyEl      = "";

var answerBtn = document.querySelector(".answer");

function startQuiz() {    

    for (i=0; i < item.length; i++) {
        questionEl = "<h2>" + item[i].question + "</h2>"
        for (j=0; j < item[i].options.length; j++) {
            var option = item[i].options[j];
            answerEl += "<button class='answer'>" + option + "</button>";
        }
        keyEl = item[i].anskey;

        console.log(item[i].question);
        console.log(option.valueOf());
        console.log(keyEl);

        break;
    }

    newText.innerHTML = questionEl + "<br>" + answerEl;       

    /*answerBtn.addEventListener("click", function() {
        console.log(item["answers"]);

        if (item.option === item.anskey) {            
            document.getElementById("validator").innerHTML = "Correct!";
            console.log("Correct");
        } else {
            document.getElementById("validator").innerHTML = "Wrong!";            
            console.log("Wrong");
        }
    });*/
}
//console.log(newText.innerHTML + "after");



// Attach event listener
startQuizBtn.addEventListener("click", function() {
    timerText();
    startQuiz();
    //console.log("I've been clicked!");
});




/* All done! Your final score is *22*. Enter initials: input, submit
Highscores: 1. AB - 22 <go back> <clear highscores>
*/


/*for(i=0; i < items.length; i++ ) {
    var item = items[i];
    //console.log(item.answers);

    questionEl += "<h2>" + item.question + "</h2>";
    //console.log("LOOK" + questionEl);

    for(var answer of item.answers) {
        //var answer = item.answers[key];
        //console.log(answer);
        answerEl = "<button class='answer'>" + answer + "</button>";
    }
    for(var answer of item.answers) {
        //var answer = item.answers[key];
        console.log(answer);
       // answerEl = "<button class='answer'>" + answer + "</button>";
    }
    //newText.innerHTML = answerEl;
}*/