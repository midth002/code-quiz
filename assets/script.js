var startQuizBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('time-countdown');
var quizQuestionEl = document.getElementById('questions');
var sectionEl = document.getElementById('content');
var listEl = document.getElementById('list');
var startPage = document.querySelector('.start-page');
var correctOrWrong = document.getElementById('correct-or-wrong');
var btnResetEl = document.getElementById('reset');
var goBackBtnEl = document.getElementById('go-back');
var hsc = document.getElementById('highScoreContent');
var startBtn;

var highScore = 0;
var correct = 0;
var numOfQuestions = 4;
var currentQuestion = 0;
var initials;
var myHighScoreShow;


var finalScoreCalc; 
timerEl.setAttribute("style", "display: flex; float:right; padding: 20px")

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
var timeLeft = 30;

function setFirstPage() {
    var aboutGame = document.createElement('p');
    startBtn = document.createElement('button');

    aboutGame.textContent = 'Welcome to the Javascript Code Quiz challenge. You will find introductory Javascript questions to see how high you know Javascript and how high you can score. At the end of the game, you will see your score based on the questions you answered given the amount of time you answered. Hit the start button to start the quiz.';
    startBtn.textContent = "Start Quiz";

    aboutGame.setAttribute("style" , "font-size: 20px; ")
    startPage.setAttribute("style", "padding: 25px; display:block; text-align:center;")
    startBtn.setAttribute("style", "background-color: purple; font-size: 25px; color:white; border:none; padding:10px; ")

    startPage.appendChild(aboutGame);
    startPage.appendChild(startBtn);
}

setFirstPage();


startPage.addEventListener("click", function() {
    
    correct = 0;
    
     
    
    if (startPage.style.display !== "none") {
         startPage.style.display = "none";
     } else {
         startPage.style.display = "block";
     }

     renderQuestion();
    
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timeLeft--;
            timerEl.textContent = "Time: " + timeLeft;
            
        } else {
            timerEl.textContent = "Time is up!";
            clearInterval(timeInterval);
            removeListItems(sectionEl);
            endOfGame();
        }
        
    }, 1000)

    
})

function renderQuestion() {
    quizQuestionEl.textContent = questions[currentQuestion].question;
    sectionEl.appendChild(quizQuestionEl)

    listEl.setAttribute("style", "background-color:white; color: white; list-style:none; width:20%; padding:0");
    
     for ( var i=0; i < selection; i++) {
        li = document.createElement('li');
        item = document.createTextNode(questions[currentQuestion].answers[i].option);
        li.appendChild(item);
        li.setAttribute("style", "background-color:purple; padding: 10px; font-size: 20px; margin:5px")
        listEl.appendChild(li);
        sectionEl.appendChild(listEl);
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
    } else  {
        correctOrWrong.textContent = "Wrong"
        currentQuestion++;
        removeListItems(listEl);
        renderQuestion();
        timeLeft =  timeLeft - 10;
        
    } 
   
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

timeLeft = '';
var stats = document.createElement("h2");
    
var form = document.createElement("form");
initials = document.createElement("input");
var submitBtn = document.createElement("input");

initials.setAttribute("type", "text");
initials.setAttribute("name", "initials");
initials.setAttribute("placeholder", "Put down your initials to save your score");
initials.setAttribute("style", "width: 80%; height: auto; font-size: 25px; margin-top: 5px;")


submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Submit");
submitBtn.setAttribute("style", "background-color: purple; font-size: 18px; color:white; border:none; padding:7px; margin: 10px;")

form.appendChild(initials);
form.appendChild(submitBtn);

stats.textContent = 'All Done';
finalScore(initials);


sectionEl.appendChild(stats);
sectionEl.appendChild(form);
    
  
    submitBtn.addEventListener("click", function(e) { 
        e.preventDefault(); 
        setFinalScores(initials.value);
        viewHighScores();
    })
    
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
    var storedScores = localStorage.getItem("highScores");
    highScore = JSON.parse(storedScores);
}

function viewHighScores() {
    removeEndOfGame(sectionEl);
    getFinalScores();
   var highScoresHeading =  document.createElement('h2');
    myHighScoreShow = document.createElement('p');
   var clearBtn = document.createElement('button');
   var goBackBtn = document.createElement('button');
    highScoresHeading.textContent = 'Scores';
    clearBtn.textContent = "Clear HighScores";
    goBackBtn.textContent = "Go Back";

    clearBtn.setAttribute("style", "background-color: purple; font-size: 18px; color:white; border:none; padding:5px; margin: 10px;");
    goBackBtn.setAttribute("style", "background-color: purple; font-size: 18px; color:white; border:none; padding:5px; margin: 10px; ");
    

    myHighScoreShow.textContent = highScore.initials + "-" + highScore.highScore;

    hsc.appendChild(highScoresHeading);
    hsc.appendChild(myHighScoreShow);
    btnResetEl.appendChild(clearBtn);
    goBackBtnEl.appendChild(goBackBtn);

    sectionEl.appendChild(hsc);
    sectionEl.appendChild(goBackBtnEl);
    sectionEl.appendChild(btnResetEl);

}


goBackBtnEl.addEventListener("click", function() {
    window.location.reload();
})

btnResetEl.addEventListener("click", function() {
    localStorage.clear();
    myHighScoreShow.textContent = "High Scores Cleared"
})




 









