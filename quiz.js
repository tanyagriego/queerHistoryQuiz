'use strict';

$(document).ready(function () {
    $(".restart").click(function () {
        location.reload();  
});

//Variable to keep score
let score = 0;
//Variable tp store the current index of the question number in the array
let questionNumber;
//
let currentQuestionObject;

    //Hide the quiz and play again button initially (can do in CSS with display:none)
    $("#quiz").hide();
    $(".finalPage").hide();
    $(".progress").hide();
    $(".score").hide();

    //This poplulates the header and instructions upon page load
    $("header").text("Queer History");
    $(".instructions").text("Some compelling text here.");
    // $(".coverImage").attr("src","images/cover.jpg");;

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
        console.log(quizData[questionNumber]);
        $("feedback").hide();
        console.log(currentQuestionObject);
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
        $(".finalPage").hide();
        $(".results").hide(); 
        $(".restart").show();

        ++questionNumber;
        if (questionNumber < quizData.length) {
            populateQuestion();
            displayProgress(questionNumber, score);
        } else {
            finalPage();
            hideQuizData();
        }

        console.log("Question number", questionNumber);
    }, 2000)
})

    function displayProgress (currentQuestionNumber) {
        $(".progress").show().text(`Question ${currentQuestionNumber+1}/5`); 
        //console.log('Quiz Status:', currentQuestionNumber)
        $(".score").show().text(`Correct: ${score}/5`);
    }

    //Need some code that shows the finalPage div once the last question has been asked
    function finalPage () {
        //when last questions ends (how to do I write that in code?) hide all quiz Data
        hideQuizData();
        //show final page
        $(".finalPage").show();
        //display final score
        $(".results").show().text(`You got ${score}/5 questions correct`);
        //give option to restart quiz 
        $(".restart").show();
    }

});// closes doc.ready function



