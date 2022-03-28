var startQuizBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('time-countdown');

function countdown() {
    

}

startQuizBtn.addEventListener("click", function() {
    var timeLeft = 10;
    
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