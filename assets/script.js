// User is present with at least 5 quesitons - array of objects
    // Format for quesitons??
        // Object that contains {question: string, choices: array, answer: string}
        // Display question - loop (move one by one though question object)
        // append question
        // append choices array

// use rselects an anser(button, radio, checkboxes) data-answer = ""
    // click event is on the parent container (not the acutaly buttons), so you can resuse the click function
    // how to know which element was clicked(event.target)=> tells the exact element was click (a, b, c, d)
    // if the answer is correct display next question acess of questions object (compare to the data answer to see if the right answer matches)
    // dont have to append the correct/worng oat the bottom of the page
    // if the answer is correct display next question
    // if answer is inccort add 15 sec to score and display next quesiton

    // When all quesitons are answered display form to submit initals
    // save fore values and initals to local storage

// change to highsores HTML (try using window.location(href="new html"))
    // read values rom localstorage
    // append score values to page



// selects all button elements and the queestion sections from the HTML
var buttonZero = document.getElementById('buttonZero');
var welcomePage = document.getElementById('welcome-page');
var Q1 = document.getElementById('Q1');
var buttonOne = document.querySelectorAll('.buttonOne')
var Q2 = document.getElementById('Q2');
var buttonTwo = document.querySelectorAll('.buttonTwo')
var Q3 = document.getElementById('Q3');
var buttonThree = document.querySelectorAll('.buttonThree')
var Q4 = document.getElementById('Q4');
var buttonFour = document.querySelectorAll('.buttonFour')
var Q5 = document.getElementById('Q5');
var buttonFive = document.querySelectorAll('.buttonFive')
var end = document.getElementById("end")

// selecets the time element from the Html and sets the start times to 75 secs
var timeEl = document.getElementById('time')
var timeLeft = 75


// this changes the display of the home page to none and starts the timer on the quiz
buttonZero.addEventListener('click', function() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    if(welcomePage.classList.contains('none') === false) {
        welcomePage.classList.add('none')
        Q1.classList.remove('none')
    }
})
buttonOne.forEach((item) => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(Q1.classList.contains('none') === false) {
            Q1.classList.add('none')
            Q2.classList.remove('none')
        } 
    })
})
buttonTwo.forEach((item) => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(Q2.classList.contains('none') === false) {
            Q2.classList.add('none')
            Q3.classList.remove('none')
        } 
    })
})
buttonThree.forEach((item) => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(Q3.classList.contains('none') === false) {
            Q3.classList.add('none')
            Q4.classList.remove('none')
        } 
    })
})

buttonFour.forEach((item) => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(Q4.classList.contains('none') === false) {
            Q4.classList.add('none')
            Q5.classList.remove('none')
        } 
    })
})


// this function will display your final score once you answer all the questions
var finalScore = document.getElementById('final-score')

function Score() {
    finalScore.textContent = "Your Final Score is " + timeLeft;
    clearInterval(timerInterval)
}

buttonFive.forEach((item) => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(Q5.classList.contains('none') === false) {
            Q5.classList.add('none')
            end.classList.remove('none')
            Score()
        } 
    })
})







// define right and wrong answers using data-answer from the HTML and create a function that will take ten seconds off the time if the answer is wrong 


// need the form to submut to the highscores html. and need it to save on the local storage