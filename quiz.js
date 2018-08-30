'use strict';

$(document).ready(function () {
    $(".playAgain").click(function () {
        location.readload(true);  
});

//Variable to keep score
let score = 0;
//Variable tp store the current index of the question number in the array
let questionNumber = 0;
//
let currentQuestionObject;

    //Hide the quiz and play again button initially 
    $("#quiz").hide()
    $(".finalPage").hide()
    $(".progress").hide()
    $(".score").hide()

    //This poplulates the header and instructions upon page load
    $("header").text("Queer History");
    $(".instructions").text("Progress toward equality comes when people work together toward a common goal. Some compelling text here.");

    function hideQuizData () {
        $("#question").hide();
        $(".currentImage").hide();
        $(".submit").hide();
        $("ul").hide();
        $(".progress").hide();
        $(".score").hide();  
    }

    //When user clicks 'Start Quiz', show quiz and hide start page
    $(".beginQuiz").on('click', () => {
        questionNumber = 0;
        $(".startPage").hide();
        $("header").hide();
        $("feedback").hide();
        $("#quiz").show();

        //Display what number of question the user is on
        displayProgress(questionNumber);
        populateQuestion();
    });

    //Populate form with questions and images and hide empty feedback div
    function populateQuestion() {
        //This variable represents accessing the current question number inside of the quizData array
        currentQuestionObject = quizData[questionNumber];
        $("feedback").hide();
        $("#question").text(currentQuestionObject.question);
        $(".currentImage").attr("src", currentQuestionObject.image);

        //Populate form with answer choices 
        for (let i = 0; i < 4; i++) {
         $(`label[for='answer${i + 1}']`).text(currentQuestionObject.options[i])
    }
}; 
    //When user clicks submit
    $('.submit').click(function(event){
        currentQuestionObject = quizData[questionNumber];
        //Check for the value of whatever the user selected
        const checked = $("input:checked").val()
        //Get the text from the value user selected (above)
        const selectedAnswer = $(`label[for=${checked}]`).text()

    //Prevent dafault behavior (do not actually submit quiz)
    event.preventDefault();
    //Hide all quiz data    
    hideQuizData();
    
    //This variable holds the answerFeedback function which determines whether a user's answer
    //matched the correct answer or not. 
    const feedbackString = answerFeedback(selectedAnswer, currentQuestionObject); 
    //This function compares the users selected answer to the actual correct answer and increases the score if correct.
    function answerFeedback (selectedAnswer, questionObject){
        //console.log('Question Object:', questionObject);
        //console.log('Selected answer:', selectedAnswer) 
        if (questionNumber === 5 ) {
            finalPage();
        }
         if (questionObject.correct_answer === selectedAnswer) {
            ++score;
            //console.log("correct answer", score)
            return questionObject.correct_feedback;
        } else {
            //console.log("incorrect answer", score)
            return quizData[questionNumber].incorrect_feedback;
        } 
 };
   
    //This shows the feedback div and populates it with text explaining the user either was
    //correct or incorrect
    $(".feedback").show().text(feedbackString);
    //This repopulates the questions div and hides the feedback after 2 seconds,
    setTimeout(function(){  
        $("ul").show();
        $("#question").show();
        $(".currentImage").show();
        $(".submit").show();
        $(".feedback").hide();
        ++questionNumber;
        console.log("Question number", questionNumber);
        populateQuestion();
        displayProgress(questionNumber, score);
    }, 2000)
})

    function displayProgress (currentQuestionNumber) {
        $(".progress").show().text(`Question ${currentQuestionNumber+1}/10`); 
        //console.log('Quiz Status:', currentQuestionNumber)
        $(".score").show().text(`Correct: ${score}/10`);
    }

    //Need some code that shows the finalPage div once the last question has been asked
    function finalPage () {
        //when last questions ends (how to do I write that in code?) hide all quiz Data
        hideQuizData();
        //show final page
        $(".finalPage").show();
        //display final score
        $(".results").show().text(`You got ${score}/10 questions current`);
        //give option to restart quiz 
        $(".restart").show();
    }

});// closes doc.ready function



