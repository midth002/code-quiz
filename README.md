# code-quiz

// pseudo coded 
1. Start screen with title, rules, start button, timer
2. Question screen container with question text, buttons, timer, feedback based on answer selected
3. End of game container with final score, form to enter initials, and a submit button
4. High score page 


JS

1. Declare variables to reference DOM elements in your HTML document

    - StartQuizBtn, StartScreenEl, timerEl, highScoreEl
    - QuestionEl, questionTitleEl, answerChoicesEl


2. Create an array of objects that hold all question -- can store this in a separate JS file
    - Answer choices
    - Question text
    - Correct answer

3. Create a startQuiz() function trigerred by the StartQuizBtn
    -Hide start screen
    -Unhide questions screen
    -Starts timer
    -Grab first question in the array

4. Create a function to getQuestion()
    - Renders title, choices and buttons

5. Create a function to check if an answer is correctly
    -If the answer is correct, then move on to the next question
    -If answer is wrong, decrement timer and move on to next question
    -Keep track of score/points
    -Increment index in array of questions to move on

6. Create a function to end the quiz
    -Hide this QuestionEl
    -Unhide the End of quiz element
    -Unhide your final score element, form, submit btn

7. Create functionality to save high scores to localStorage