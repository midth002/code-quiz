var startQuizBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('time-countdown');
var quizQuestionEl = document.getElementById('questions');
var sectionEl = document.getElementById('container');
var listEl = document.getElementById('list');
var startPage = document.querySelector('.start-page');
var correctOrWrong = document.getElementById('correct-or-wrong');


var highScore = 0;
var correct = 0;
var numOfQuestions = 4;
var currentQuestion = 0;

var finalScoreCalc; 

var answers = ['<script src="xxx.js">', 'False', '.Js', 'if(i==5)']

var questions = [
    { 
        question: '1. What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
        {option: '<script name="xxx.js">', answer: false},
        {option:'<script href="xxx.js">', answer: false}, 
        {option: '<script src="xxx.js">', answer: true},
        {option: '<Link rel src="xxx.js">', answer: false}
        ]
    }, 

    {
        question: '2. Which of these or boolean values?',
        answers: [
        {option: '123', answer: false},
        {option:'"Larry"', answer: false},
        {option: 'False', answer: true},
        {option: '["One", "Two", "Three]', answer: false}
        ]
    },

    {
        question: 'What is the file extension we use for JavaScript?',
        answers: [
        {option: '.Js', answer: true},
        {option: '.Java', answer: false},
        {option: '.javascript', answer: false},
        {option: '.xml', answer: false}
        ]
    }, 

    {
        question: 'Which of these is the way we write IF statements in JavaScript?',
        answers: [
        {option: 'if i=5 then', answer: false},
        {option:'if i=5', answer: false},
        {option: 'if i===5 then', answer: false},
        {option: 'if(i==5)', answer: true}
        ]
    }
]



var selection = questions[currentQuestion].answers.length;
var item; 


startQuizBtn.addEventListener("click", function() {
    var timeLeft = 10;
    correct = 0;
    renderQuestion();
    
    if (startPage.style.display !== "none") {
        startPage.style.display = "none";
    } else {
        startPage.style.display = "block";
    }
     
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timeLeft--;
            timerEl.textContent = "Time: " + timeLeft;
        } else {
            timerEl.textContent = "Time is up!";
            clearInterval(timeInterval);
        }
        
    }, 1000)

    
})


function renderQuestion() {
    console.log(currentQuestion)
    quizQuestionEl.textContent = questions[currentQuestion].question;
    
    
    listEl.setAttribute("style", "background-color:white; color: white; list-style:none; width:20%; padding:0");
    
     for ( var i=0; i < selection; i++) {
        li = document.createElement('li');
        item = document.createTextNode(questions[currentQuestion].answers[i].option);
        li.appendChild(item);
        li.setAttribute("style", "background-color:purple; padding: 10px; font-size: 20px; margin:5px")
        listEl.appendChild(li);
     } 
}


listEl.addEventListener('click', function(e) {
    var target = e.target.textContent;
    var theAnswer = answers[currentQuestion]

    if (target == theAnswer && currentQuestion == 3) {
        correctOrWrong.textContent = "Correct"
        removeListItems(listEl);
        correct++;
        endOfGame();
        
    } else if (target != theAnswer && currentQuestion == 3){
        correctOrWrong.textContent = "Wrong"
        removeListItems(listEl);
        endOfGame();
        
    }
    else if (target == theAnswer){
        correctOrWrong.textContent = "Correct"
        currentQuestion++;
        correct++;
        removeListItems(listEl);
        renderQuestion();
    } else {
        correctOrWrong.textContent = "Wrong"
        currentQuestion++;
        removeListItems(listEl);
        renderQuestion();
        
    }
    
    // correctOrWrong = document.createTextNode(target);
    
    sectionEl.appendChild(correctOrWrong);
   
})

// Removes all child nodes with the while statement and setting the quizQuestionEl text content to blank.
function removeListItems(parent) { 
    quizQuestionEl.textContent =' ';
    
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
        
}

function removeEndOfGame(parent) { 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
        
}


function endOfGame() {

    console.log(correct);
    var stats = document.createElement("h2");
    
    var form = document.createElement("form");
    var initials = document.createElement("input");
    var submitBtn = document.createElement("input");

    initials.setAttribute("type", "text");
    initials.setAttribute("name", "initials");
    initials.setAttribute("placeholder", "Put down your initials to save your score");
    
    
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Submit");

    form.appendChild(initials);
    form.appendChild(submitBtn);

    stats.textContent = 'All Done';
    finalScore();

    
    sectionEl.appendChild(stats);
    sectionEl.appendChild(form);

    submitBtn.addEventListener("click", function(e) { 
        e.preventDefault(); 
        setFinalScores(initials.value);
        viewHighScores();
    })
    

    setFinalScores();
}  


function finalScore() {
     var yourScore = document.createElement("h4");
    finalScoreCalc = ((correct/numOfQuestions)*100).toString();
    
    yourScore.textContent = "Your final score was " + finalScoreCalc;
    sectionEl.appendChild(yourScore);
    return finalScoreCalc;

}

function setFinalScores(initials) {
    finalScoreCalc = ((correct/numOfQuestions)*100).toString();
    
    var usersHighScore = {
        initials: initials,
        highScore: finalScoreCalc
    }
    localStorage.setItem("highScores", JSON.stringify(usersHighScore));
    
}

function getFinalScores() {
    finalScoreCalc = ((correct/numOfQuestions)*100).toString();
    var storedScores = localStorage.getItem("highScores");

    if (storedScores === null) {
        highScore = 0;
    } else {
        highScore = JSON.parse(storedScores);
        console.log(highScore.highScore);
        
    }
}

function viewHighScores() {
    removeEndOfGame(sectionEl);
    getFinalScores();
   var highScoresHeading =  document.createElement('h2');
    highScoresHeading.textContent = 'High Scores';
    var myHighScoreShow = document.createElement('p');
    myHighScoreShow.textContent = "My high Score";

    sectionEl.appendChild(highScoresHeading);
}



 









