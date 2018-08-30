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
     {  question: "Most people think they don't know anyone gay or lesbian, and in fact everybody does. It is imperative that we come out and let people know who we are and disabuse them of their fears and stereotypes. - Robert Eichberg. National Coming Out Day was founded by Robert Eichberg and Jean O'Leary in what year?",
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