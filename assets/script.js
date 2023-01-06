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
            end.classList.remove('none'); 
            Score(); 
        }
    }, 1000);
    if(welcomePage.classList.contains('none') === false) {
        welcomePage.classList.add('none')
        Q1.classList.remove('none')
    }
})


function wrongAnswer() {
        timeLeft = timeLeft-10
        timeEl.textContent = "Time: " + timeLeft;  
}


var questionButtons = document.querySelectorAll(".QB")
var questionSection = document.querySelectorAll(".QS")

// this function will display your final score once you answer all the questions
var finalScore = document.getElementById('final-score')

function Score() {
    finalScore.textContent = "Your Final Score is " + timeLeft;
    // clearInterval(timerInterval)
}


questionButtons.forEach(item => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(item.classList.contains('correct') === false) {
             wrongAnswer();
        }
        for(let i = 0; i < questionSection.length; i++ ) {
             var question = questionSection[i]
            if(question.classList.contains('none') === false) {
                question.classList.add('none')
                for(let j = [i+1]; j < questionSection.length; j++) {
                    var nextQ = questionSection[j]
                    var lastQ = questionSection[questionSection.length-1]
                     if(nextQ === lastQ){
                        Score()
                        return lastQ.classList.remove('none')
                     } else {
                       return  nextQ.classList.remove('none')
                     }
                }

            }
        }

    })
})

var displayScore = document.querySelector(".score-display")
var submit = document.querySelector('.submit')
var initials = document.getElementById('initals')

var highScore = {
    'initals': initials.value,
    'score': finalScore.value
}

submit.addEventListener('click', function(event){
    event.preventDefault() 

    window.location.assign("./highscores.html")
    
})


// need the form to submut to the highscores html. and need it to save on the local storage