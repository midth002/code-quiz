var startQuizBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('time-countdown');
var quizQuestionEl = document.getElementById('questions');
var sectionEl = document.getElementById('container');
var listEl = document.getElementById('list');
var startPage = document.querySelector('.start-page');

var question1 = 'What is the correct syntax for referring to an external script called "xxx.js"?';
var question2 = 'Which of these or boolean values?';
var question3 = 'What is the file extension we use for JavaScript?'
var question4 = 'Which of these is the way we write IF statements in JavaScript?'

var mc1 = ['1. <script name="xxx.js">', ' 2. <script href="xxx.js"?', ' 3. <script src="xxx.js">'];
var mc2 = ['1. 123', '2. "Larry"', '3. False', '4. ["One", "Two", "Three]']
var mc3 = ['.Js', '.Java', '.javascript', '.xml']
var mc4 = ['if i=5 then', 'if i=5', 'if i===5 then', 'if(i==5)']

var correctAnswer = [mc1[2], mc2[2], mc3[0], mc4[3]];
var item; 

startQuizBtn.addEventListener("click", function() {
    var timeLeft = 10;
    
    quizQuestionEl.textContent = question1;
    console.log(quizQuestionEl);

    
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

    makeOrderList();

})




function makeOrderList() {
   
    for (var i = 0; i < mc1.length; i++) {
        item = document.createElement('li');
        item.textContent = mc1[i];
        listEl.appendChild(item);
        listEl.setAttribute("style", "background-color:white; color: white; list-style:none; width:20%; padding:0");
        item.classList.add("list-style");
        console.log(listEl);
    }


    
    return listEl;

}

function checkAnswer(answer) {
    var selectedAnswer = false; 

}

console.log(correctAnswer);





