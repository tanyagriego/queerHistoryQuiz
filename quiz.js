'use strict';

//This array of objects holds all questions, answer options, and correct answers. 
const quizData = [{
    question: "On what date did the U.S. Supreme Court require all states to grant same-sex marriages in all states?",
    options:["June 26, 2015", "November 12, 2008","May 19, 2014", "December 6, 2012"],
    answer: "June 26, 2015", 
},
]

//This poplulates with header with text 
$("header").text("Queer History!");
$(".instructions").text("A quiz about queer history. Are. You. Ready?!");

//This counts the total of what??
let counter = quizData.length;

//When user clicks 'Start Quiz!' hide the startPage

    // $(".beginQuiz").click(function() {
    //     $(".startPage").hide();


// Hide each page and show only the page that the user is currently engaging with.
//These items should be inside a function that populates the page with questions and
//hides the start page 
//Populate form with question and answer choices... so I need to show the div
//and also add photos somewhere here
// function showData (quizData) {
//     for (let i = 0; quizData.length; i++) {
//         $("header").hide();
//         $(".startPage").hide();
//         $(".quiz").append(i);

//     }
// }

// showData();