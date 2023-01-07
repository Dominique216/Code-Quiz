
// selects all the button elements and the queestion sections from the HTML
var buttonZero = document.getElementById('buttonZero');
var welcomePage = document.getElementById('welcome-page');
var end = document.getElementById("end")
var questionButtons = document.querySelectorAll(".QB")
var questionSection = document.querySelectorAll(".QS")
var finalScore = document.getElementById('final-score')
// selecets the time element from the Html and sets the start time to 75 secs
var timeEl = document.getElementById('time')
var timeLeft = 75


// this changes the display of the home page to none and starts the timer on the quiz
buttonZero.addEventListener('click', function() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;
        if(timeLeft === 0) {
            for(let i=0; i < questionSection.length; i++){
                var  timeOutQ = questionSection[i];
                if(timeOutQ.classList.contains('none') === false) {
                    timeOutQ.classList.add('none')
                    end.classList.remove('none')
                }
            }
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

// this function will take 10 secions off the the time if you hit the wrong answer
function wrongAnswer() {
        timeLeft = timeLeft-10
        timeEl.textContent = "Time: " + timeLeft;  
}

// This function will set your final score at the end of the quiz
function Score() {
    finalScore.textContent = timeLeft;
}


// this function adds an event listener to each button, then it checks if the button click was the right answer, then it runs though the question sections and will add a class of none to the current section and remove a class of none from the next section, so that only one question displays at a time. 
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

// this grabs the submit button and the initals going into the input
var submit = document.querySelector('.submit')
var initials = document.getElementById('initals')

// this function will get the last score and initals added and set a new score and save it to the local storage
function getHighScores() {
    var lastScore = localStorage.getItem('lastScore');
    var newScoreList = [];
    if(lastScore) {
        newScoreList = JSON.parse(lastScore);
    }
    newScoreList.push({name: initials.value, score: finalScore.textContent});
    localStorage.setItem('lastScore', JSON.stringify(newScoreList))
} 

//   this function runs the getHighScores function and opens the highscores.html when the sumbit button is pressed.
submit.addEventListener('click', function(event){
    event.preventDefault(); 
    getHighScores();
    // getLastHighScore();
    window.location.assign("./highscores.html")
    
})


// problems: 1. If the time gets to zero, the display score page comes up, but the current question doesnt go away
