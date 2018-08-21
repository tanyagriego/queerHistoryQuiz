'use strict';

//This array of objects holds all questions, answer options, and correct answers. 
const quizData = [{
    question: "On what date did the U.S. Supreme Court require all states to grant same-sex marriages in all states?",
    options:["June 26, 2015", "November 12, 2008","May 19, 2014", "December 6, 2012"],
    answer: "June 26, 2015", 
},
{   
    question: "What does each color on the rainbow flag represent?",
    options: [  "Red: Blood, Orange: Hope, Yellow: Sex, Green: Harmony and Peace, Blue: Truth, Purple: Power",
                "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Spirit",
                "Red: Energy, Orange: Happiness, Yellow: Warmth, Green: Truth, Blue: Faith, Purple: Harmony and Peace",
                "Red: Love, Orange: Happiness, Yellow: Hope, Green: Strength, Blue: Wisdom, Purple: Strength"],
    answer :  "Red: Life, Orange: Healing, Yellow: Sunlight, Green: Nature, Blue: Harmony and Peace, Purple: Tranquility",
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
    });



//Populate form with question and answer choices... so I need to show the div
//and also add photos somewhere here
// function showData (quizData) {
//     for (let i = 0; quizData.length; i++) {
//         $("header").hide();
//         $(".startPage").hide();
//         $(".quiz").append(i);

//     }
// }
