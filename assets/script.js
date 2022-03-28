var startQuizBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('time-countdown');
var quizQuestionEl = document.getElementById('questions');
var sectionEl = document.getElementById('container');
var orderListEl = document.getElementById('list')

var question1 = 'What is the correct syntax for referring to an external script called "xxx.js"';




startQuizBtn.addEventListener("click", function() {
    var timeLeft = 10;
    
    quizQuestionEl.textContent = question1;
    console.log(quizQuestionEl);

 
   
    
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


function  makeOrderList() {
    var multipleChoice1 = ['<script name="xxx.js">', '<script href="xxx.js"?', '<script src="xxx.js">'];

    for (var i = 0; i < multipleChoice1.length; i++) {
        var item = document.createElement('li');
        item.textContent = multipleChoice1[i];
        console.log(orderListEl);
        orderListEl.appendChild(item);
    // orderListEl.appendChild(item);
    }
    
    return orderListEl;

}



