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
    var items   = [
        {
            question: "Commonly used data types DO NOT include:",
            answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
            anskey: "2. Booleans"
        },
        {
            question: "The condition in an if/else statement is enclosed within ______.",
            answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
            anskey: "3. parenthesis"
        },
        {
            question: "Arrays in JavaScript can be used to store ______.",
            answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
            anskey: "4. all of the above"
        },
        {
            question: "String values must be enclosed within ______ when being assigned to variables.",
            answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
            anskey: "3. quotes"
        },
        {
            question: "A very usefull tool used during development and debugging for printing content to the debugger is:",
            answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
            anskey: "4. console.log"
        }
    ],
    questionEl = "",
    answerEl   = "";

    for(i=0; i < items.length; i++ ) {
        var item = items[i];
        //console.log(item.answers);

        newText.innerHTML = "<h2>" + items[i].question + "</h2>";

        for(var key in item.answers) {
            var answer = item.answers[key];
            console.log(answer);
            newText.innerHTML += "<button class='answer'>" + answer + "</button>";
        }
    }   

    //console.log(items[0].answers.length);
    /*
    for (var key in item) {
        var arr = item[key];
        for (i=0; i < item.length; i++) {     
            var obj = arr[i];
            for (var prop in obj) {   
                console.log(i);
                //answerEl += "<button class='answer'>" + item.answers[i]+ "</button>";
            }
        }
    }

    newText.innerHTML = questionEl;
    newText.innerHTML += answerEl;    */
/*
    var answerBtn = document.querySelector(".answer");

    answerBtn.addEventListener("click", function() {
        console.log(item["answers"]);
        if (this.item[answers] === item.key) {            
            document.getElementById("validator").innerHTML = "Correct!";
            console.log("Correct");
        } else {
            document.getElementById("validator").innerHTML = "Wrong!";            
            console.log("Wrong");
    });
*/
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