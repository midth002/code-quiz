var startQuizBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('time-countdown');
var quizQuestionEl = document.getElementById('questions');
var sectionEl = document.getElementById('container');
var listEl = document.getElementById('list');
var startPage = document.querySelector('.start-page');
var correctOrWrong = document.getElementById('correct-or-wrong');


var correct = false;
var currentQuestion = 0;



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
        endOfGame();
        
    } else if (target == theAnswer){
        correctOrWrong.textContent = "Correct"
        currentQuestion++;
        removeListItems(listEl);
        renderQuestion();
    } else {
        correctOrWrong.textContent = "Wrong"
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

function endOfGame() {
    var stats = document.createElement("h2");
    stats.textContent = 'Stats';

    sectionEl.appendChild(stats);
}
 

    /* btn.addEventListener("click", function(e) {
        var mySelection = questions[currentQuestion].answers[(e)].answer;
        
      
        
        
     })
     

}*/








