'use strict';

//This array of objects holds all questions, answer options, and correct answers. 
const quizData = [
{
    question: "On what date did the U.S. Supreme Court require all states to grant same-sex marriages in all states?",
    options:["June 26, 2015", "November 12, 2008","May 19, 2014", "December 6, 2012"],
    correct_answer: "June 26, 2015", 
    incorect_answer: "Incorrect",
    //photo by Nick Karvounis on Unsplash
    image: "rings.jpeg", 
    alt: "two hands wearing wedding rings"
},
{   
    question: "What does each color on the rainbow flag represent?",
    options: [  "Red: Blood, Orange: Hope, Yellow: Sex, Green: Harmony and Peace, Blue: Truth, Purple: Power",
                "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Spirit",
                "Red: Energy, Orange: Happiness, Yellow: Warmth, Green: Truth, Blue: Faith, Purple: Harmony and Peace",
                "Red: Love, Orange: Sex, Yellow: Hope, Green: Strength, Blue: Wisdom, Purple: Strength"],
    correct_answer :  "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Tranquility",
    incorect_answer: "Incorrect",
    //photo by Peter Hershey
    image: "flag.jpg",
    alt: "rainbow flag"
},
]

//Score keeper
let score = 0;

//Hide the quiz and play again button initially 
$(".quiz").hide()
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
        $(".quiz").show();
        populateQuestion();
    });

 let questionNumber = 0;

//Populate form with questions 

function populateQuestion() {
    $(".question").text(quizData[questionNumber].question);
    $(".currentImage").attr("src",quizData.image);

//Populate form with answer choices— Do not understand 
   for (let i = 0; i < 4; i++) {
     $(`label[for='answer${i + 1}']`).text(quizData[questionNumber].options[i])
   }
};

//When user clicks submit
$('.submit').click(function(event){
    event.preventDefault();
    let correct = true;
    //tally score
    if (correct) {
        ++score;
    } else {
    }
    console.log(score);
    //populate with next question (increment question number)
    ++questionNumber;
    populateQuestion();
})
// Give feedback of correct/incorrect 

    const correctAnswer = quizData.answer;
    const checked = $("input:checked").val()
    const selectedAnswer = $(`label[for=${checked}]`).text()

 function answerFeedback (){
    if (correctAnswer === selectedAnswer) {
     return "Correct"
    } else {
     return "Incorrect";
    }
 };




