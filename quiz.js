function checkAnswer() {
    //  define the correct answer
     let correctAnswer = "4";

    //  get the user answer
     let userAnswer = document.querySelector('input[name="quiz"]:checked');

    //  used the .log statement to figure of the return value of userAnswer
     console.log(userAnswer.value);
     

    //  get the user feedback
     let feedBack = document.getElementById('feedback');

    

    // if statement that returns feedback to the user

     if(correctAnswer == userAnswer.value) {
        feedBack.textContent = 'Correct! Well done.';
     } else {
        feedBack.textContent = "That's incorrect. Try again!";
     }


}

    //  getting the button and adding an event listener to it
document.getElementById('submit-answer').addEventListener("click", checkAnswer)


