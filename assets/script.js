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