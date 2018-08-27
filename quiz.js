'use strict';

$(document).ready(function () {
    $(".playAgain").click(function () {
        location.readload(true);
});

//This array of objects holds all questions, answer options, and correct answers. 
const quizData = [
{
    question: "On what date did the U.S. Supreme Court require all states to grant same-sex marriages in all states?",
    options:["June 26, 2015", "November 12, 2008","May 19, 2014", "December 6, 2012"],
    correct_answer: "June 26, 2015",
    correct_feedback: "Correct! Some other information", 
    incorrect_feedback: "Incorrect. The answer is June 26th, 2018",
    //photo by Nick Karvounis on Unsplash
    image: "images/rings.jpg", 
    alt: "two hands wearing wedding rings"
},
{   
    question: "What does each color on the rainbow flag represent?",
    options: [  "Red: Blood, Orange: Hope, Yellow: Sex, Green: Harmony and Peace, Blue: Truth, Purple: Power",
                "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Spirit",
                "Red: Energy, Orange: Happiness, Yellow: Warmth, Green: Truth, Blue: Faith, Purple: Harmony and Peace",
                "Red: Love, Orange: Sex, Yellow: Hope, Green: Strength, Blue: Wisdom, Purple: Strength"],
    correct_answer :  "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Tranquility",
    correct_feedback: "Correct! Some other information",
    incorrect_feedback: "Incorrect. Insert correct answer",
    //photo by Peter Hershey
    image: "images/flag.jpg",
    alt: "rainbow flag"
},
]

//Score keeper
let score = 0;

//Hide the quiz and play again button initially 
$("#quiz").hide()
$(".finalPage").hide()

//This poplulates the header and instructions upon page load
$("header").text("Queer History");
$(".instructions").text("A quiz about queer history. Are. You. Ready?!");

//When user clicks 'Start Quiz!' hide startPage and header and also show quiz
//     $(".beginQuiz").click(function(){
//          $(".startPage").hide();
//          $("header").hide();
//          $(".quiz").show();
// });

//The same as above, written with an arrow function
    $(".beginQuiz").on('click', () => {
        $(".startPage").hide();
        $("header").hide();
        $("feedback").hide();
        $("#quiz").show();
        //Display what number of question the user is on
        $(".progress").show().text("question number");
        $(".score").show().text("score");
        populateQuestion();
    });

//This variable stores the current index of the question number in the array
 let questionNumber = 0;
//This variable represents accessing the current question number inside of the quizData array
let currentQuestionObject = quizData[questionNumber];

//Populate form with questions and images and hide empty feedback div
function populateQuestion() {
    $("feedback").hide();
    $("#question").text(quizData[questionNumber].question);
    $(".currentImage").attr("src", quizData[questionNumber].image);

//Populate form with answer choices 
   for (let i = 0; i < 4; i++) {
     $(`label[for='answer${i + 1}']`).text(quizData[questionNumber].options[i])
   }
};

//When user clicks submit
$('.submit').click(function(event){
    //Check for the value of whatever the user selected
    const checked = $("input:checked").val()
    //Get the text from the value user selected (above)
    const selectedAnswer = $(`label[for=${checked}]`).text()

    //Prevent dafault behavior (do not actually submit quiz)
    event.preventDefault();
    
    //Something here needs to happen
    let correct = true;
    //tally score
    if (correct) {
        ++score;
    } else {
    }
    console.log(score);
    
    //populate with next question (increment question number)
    //remove existing question elements from DOM and insert feedback to the feedback div
    $("#question").hide();
    $(".currentImage").hide();
    $(".submit").hide();
    $("ul").hide();
    
    //This variable holds the answerFeedback function which determines whether a user's answer
    //matched the correct answer or not. The selectedAnswer represents what the user selected
    //and the currentQuestionObject is the object (data) of whatever questions the user 
    //is currently on
    const feedbackString = answerFeedback(selectedAnswer, currentQuestionObject); 
   
    //This shows the feedback div and populates it with text explaining the user either was
    //correct or incorrect
    $(".feedback").show().text(feedbackString);
    //This times the duration that feedback is shown. The feedback disappears after 2 seconds.
    setTimeout(function(){
    //This repopulates the questions div and hides the feedback after 2 seconds,  
        $("ul").show();
        $("#question").show();
        $(".currentImage").show();
        $(".submit").show();
        $(".feedback").hide();
    }, 2000)
    //This increases the questionNumber which means it moves the user onto the next question

    //This calls the function that populates the question div with questions and options 
    //(the objects in the quizData array)
    
    ++questionNumber;
    populateQuestion();
})

//This function compares the users selected answer to the actual correct answer 
//From Jon example: questionObject is the pizza object in this case. questionObject is 
//taking currrentQuestionObject (in other words, currrentQuestionObject is being renamed
//"currrentQuestionObject" like "myObject" was being renamed "pizza")
 function answerFeedback (selectedAnswer, questionObject){
    if (questionObject.correct_answer === selectedAnswer) {
     return questionObject.correct_feedback;
    } else {
     return questionObject.incorrect_feedback;
    }
 };
});




//Display the users score