
// grabs the score-display, the initals-display, and the clear button from the highscores HTML page
var displayScore = document.querySelector(".score-display")
var displayName = document.querySelector(".initials-display")
var clearBtn = document.getElementById('clear')


// this function gets the scores and initials that were saved to the local storage from the submit button on the index.HTML and adds them to the text content on the highscores HTML
function getLastHighScore() {
    var test = JSON.parse(localStorage.getItem("lastScore"))

    console.log(test)
    totalArr = []
    test.forEach(obj => {
        if(obj.name !== "") {
          displayName.textContent += obj.name + " ";
        displayScore.textContent +=  obj.score + " ";  
        } else {
            return
        }
    })
}
// This function grabs the scores from the local storage every time the page is loaded.
function init() {
    getLastHighScore();
}
init();

// This clears the local storage and the score text contant eveny time the clear button is preseed.
clearBtn.addEventListener('click', function(){
   localStorage.clear() 
   displayName.textContent = "";
   displayScore.textContent ="";
})
