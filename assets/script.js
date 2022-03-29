var startQuizBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('time-countdown');
var quizQuestionEl = document.getElementById('questions');
var sectionEl = document.getElementById('container');
var listEl = document.getElementById('list');
var startPage = document.querySelector('.start-page');
var correctOrWrong = document.getElementById('correct-or-wrong');


var correct = false;
var currentQuestion = 0;





var questions = [
    { 
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
        {option: '<script name="xxx.js">', answer: false},
        {option:'<script href="xxx.js">', answer: false}, 
        {option: '<script src="xxx.js">', answer: true},
        {option: '<Link rel src="xxx.js">', answer: false}
        ]
    }, 

    {
        question: 'Which of these or boolean values?',
        answers: [
        {option: '123', answer: false},
        {option:'"Larry"', answer: false},
        {option: 'False', answer: true},
        {option: '["One", "Two", "Three]', answer: false}
        ]
    }

    /*{
        question: 'What is the file extension we use for JavaScript?',
        answer: '.Js',
        option1: '.Js', 
        option2: '.Java', 
        option3: '.javascript', 
        option4: '.xml'
        
    }, 

    {
        question: 'Which of these is the way we write IF statements in JavaScript?',
        answer: 'if(i==5)',
        option1: 'if i=5 then', 
        option2:'if i=5', 
        option3: 'if i===5 then', 
        option4: 'if(i==5)'
    }*/
]




var item; 
var isChecked = false;
var myArray = [];

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
    var btn;
    quizQuestionEl.textContent = questions[currentQuestion].question;
    
    var selection = questions[currentQuestion].answers.length;
    listEl.setAttribute("style", "background-color:white; color: white; list-style:none; width:20%; padding:0");
    
     for ( var i=0; i < selection; i++) {
        li = document.createElement('li');
        item = document.createTextNode(questions[currentQuestion].answers[i].option);
        li.appendChild(item);
        li.setAttribute("style", "background-color:purple")
        listEl.appendChild(li);
        console.log(listEl);
        console.log(item)
       
        
       
     } 
}
listEl.addEventListener('click', function(e) {
    var target = e.target;
    console.log(target)
})


    /* btn.addEventListener("click", function(e) {
        var mySelection = questions[currentQuestion].answers[(e)].answer;
        
        if (mySelection) {
            correctOrWrong.textContent = "Correct";
        } else {
            correctOrWrong.textContent = "Wrong";
        }

        sectionEl.appendChild(correctOrWrong);
        
     })
     

}*/








