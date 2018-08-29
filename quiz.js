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
                "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Tranquility",
                "Red: Energy, Orange: Happiness, Yellow: Warmth, Green: Truth, Blue: Faith, Purple: Harmony and Peace",
                "Red: Love, Orange: Sex, Yellow: Hope, Green: Strength, Blue: Wisdom, Purple: Strength"],
    correct_answer :  "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Tranquility",
    correct_feedback: "Correct! la la la",
    incorrect_feedback: "Sadly, that's not correct",
    //photo by Peter Hershey
    image: "images/flag.jpg",
    alt: "rainbow flag"
},
{
    question: "The first gay pride marches took place on June 28th, 1970 in New York, Los Angeles, San Francisco and Chicago. What anniversay were the marches commemorating?",
    options: ["Martin Luther King's Opposition to War", "Voting Rights Act", "The Stonewall Riots", "Summer of Love"],
    correct_answer: "The Stonewall Riots",
    correct_feedback: "Yes! The Stonewalls Riots inspired the first gay pride marches",
    incorrect_feedback: "Wrong.",
    //photo by Dimitar Belchev
    image: "images/pride.jpg",
    alt: "people at pride march"
},
{   question: "Stonwall question",
    options: ["1", "2", "3", "4"],
    correct_answer: "4",
    correct_feedback: "yay",
    incorrect_feedback: "no",
    //photo by 
    image: "images/.jpg",
    alt: ""

},
 {   question: "Most people think they don't know anyone gay or lesbian, and in fact everybody does. It is imperative that we come out and let people know who we are and disabuse them of their fears and stereotypes. - Robert Eichberg. National Coming Out Day was founded by Robert Eichberg and Jean O'Leary in what year?",
     options: ["1988", "1993", "1995", "2000"],
    correct_answer: "1988",
    correct_feedback: "Yep! National Coming Out Day is observed October 11th of every year.",
    incorrect_feedback: "Incorrect! The year was 1988. National Coming Out Day is observed October 11th of every year.",
    //photo by 
    image: "images/heros.jpg",
    alt: "little girl holding a sign in pride parade"

},
// {   question: "",
//     options: ["", "", "", ""],
//     correct_answer: "",
//     correct_feedback: "",
//     incorrect_feedback: "",
//     //photo by 
//     image: "images/.jpg",
//     alt: ""

// },

]

//Hide the quiz and play again button initially 
$("#quiz").hide()
$(".finalPage").hide()
$(".progress").hide()
$(".score").hide()

//This poplulates the header and instructions upon page load
$("header").text("Queer History");
$(".instructions").text("Progress toward equality comes when people work together toward a common goal. Some compelling text here.");

//When user clicks 'Start Quiz!' hide startPage and header and also show quiz
//     $(".beginQuiz").click(function(){
//          $(".startPage").hide();
//          $("header").hide();
//          $(".quiz").show();
// });

//The same as above, written with an arrow function
    $(".beginQuiz").on('click', () => {
        questionNumber = 0;
        let score = 0;
        $(".startPage").hide();
        $("header").hide();
        $("feedback").hide();
        $("#quiz").show();

        //Display what number of question the user is on
        // $(".progress").show().text("question number");
        // $(".score").show().text("score");
        displayProgress(questionNumber, score);
        populateQuestion();
    });

//This variable stores the current index of the question number in the array
 let questionNumber = 0;

//Populate form with questions and images and hide empty feedback div
function populateQuestion() {
    //This variable represents accessing the current question number inside of the quizData array
    let currentQuestionObject = quizData[questionNumber];
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
    let currentQuestionObject = quizData[questionNumber];
    //Check for the value of whatever the user selected
    const checked = $("input:checked").val()
    //Get the text from the value user selected (above)
    const selectedAnswer = $(`label[for=${checked}]`).text()

    //Prevent dafault behavior (do not actually submit quiz)
    event.preventDefault();
    
    //Something here needs to happen
    let correct = true;
    //Score keeper
    let score = 0;  
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
    $(".progress").hide();
    $(".score").hide();
    
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
        ++questionNumber;
        populateQuestion();
        displayProgress(questionNumber, score);
    
    }, 2000)
    //This increases the questionNumber which means it moves the user onto the next question

    //This calls the function that populates the question div with questions and options 
    //(the objects in the quizData array)
    })

//This function compares the users selected answer to the actual correct answer 
//From Jon example: questionObject is the pizza object in this case. questionObject is 
//taking currrentQuestionObject (in other words, currrentQuestionObject is being renamed
//"currrentQuestionObject" like "myObject" was being renamed "pizza")
 function answerFeedback (selectedAnswer, questionObject){
    //console.log('Question Object:', questionObject)
    //console.log('Selected answer:', selectedAnswer)
    if (questionObject.correct_answer === selectedAnswer) {
     return questionObject.correct_feedback;
    } else {
     return quizData[questionNumber].incorrect_feedback;
    }
 };
});

//Need some code that shows the finalPage div once the last question has been asked
//$(".finalPage").show();

 function displayProgress (currentQuestionNumber, score) {
     $(".progress").show().text(`Question ${currentQuestionNumber+1}/10`); 
     console.log('Quiz Status:', currentQuestionNumber)
     $(".score").show().text(`Correct: ${score}/10`);
 }