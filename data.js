//This array of objects holds all questions, answer options, and correct answers. 

const quizData = [
    {
        supporting_info: "The first gay pride marches took place on June 28th, 1970 in New York, Los Angeles, San Francisco and Chicago.",
        question: "What anniversay were the marches commemorating?",
        options: ["Martin Luther King's Opposition to War", "Voting Rights Act", "The Stonewall Riots", "Summer of Love"],
        correct_answer: "The Stonewall Riots",
        correct_feedback: "Yes! The Stonewalls Riots inspired the first gay pride marches.",
        incorrect_feedback: "Nice try. While that event did happen during the 60's, it was actually The Stonewalls Riots that inspired the first gay pride marches.",
        //photo by Dimitar Belchev
        image: "images/pride.jpg",
        alt: "people at pride march"
    },
    {   
        supporting_info:"On June 28, 1969, the Stonewall Inn was raided by police who arrested and roughed up patrons for violating (then) laws pertaining to gender and sexuality, such as cross-dressing and public displays of affection between people of the same-sex.",
        question: "What happened as a result of this police raid? ",
        options: ["Patrons fought back which resulted in six days of riots and protests and ultimately prompted more LGTBQ+ political activism.", "Patrons fought back which prompted access to shelter for queer youth 18 and younger who formally didn\’t have homes.", "Patrons fought back which prompted the repeal of all discriminatory laws against LGBTQ+ people.", "All of the above."],
        correct_answer: "Patrons fought back which resulted in six days of riots and protests and ultimately prompted more LGTBQ+ political activism.",
        correct_feedback: "That's correct! The acts of the brave patrons at The Stonewall Inn inspired many throughout the nation.",
        incorrect_feedback: "Sadly, no. The good news is that the six days of riots and protests ultimately prompted more LGTBQ+ political activism.",
        //photo by 
        image: "images/stonewallInn.jpg",
        alt: "" 
    },
    {   
        supporting_info: '"Most people think they don\'t know anyone gay or lesbian, and in fact everybody does. It is imperative that we come out and let people know who we are and disabuse them of their fears and stereotypes." - Robert Eichberg.',
        question:  "National Coming Out Day was founded by Robert Eichberg and Jean O'Leary in what year?",
        options: ["1988", "1993", "1995", "2000"],
        correct_answer: "1988",
        correct_feedback: "Yep! National Coming Out Day is observed October 11th of every year.",
        incorrect_feedback: "Incorrect. The year was 1988. National Coming Out Day is observed October 11th of every year.",
        //photo by 
        image: "images/comingOut.jpg",
        alt: "little girl holding a sign in pride parade"
    },
    {   
        supporting_info:'"Don\’t Ask, Don\’t Tell" was a law put into effect in 1993. This law was thought to be liberal as it allowed LGBTQ+ people to serve in the military\, though it also continued to force them to be silent about their sexual orientation.',
        question: "By the year 2009, the miliaty had banned approximtely how many serivce members upon being outed?",
        options: ["27,000", "500", "13,000", "4,000"],
        correct_answer: "13,000",
        correct_feedback: "Correct! 13,000 service members were banned for being honest about who they were.",
        incorrect_feedback: "Incorrect. 13,000 service members were banned for being honest about who they were.",
        //photo by 
        image: "images/airForce.jpg",
        alt: "Rainbow shirt underneath U.S Air Force uniform"   
    },
    {
        supporting_info:"Many U.S. states granted marriage licenses to same-sex couples priror to the U.S. supreme court's ruling for marraige equality nationwide.",
        question: "On what date did marriage equality become legal in all states?",
        options:["June 26, 2015", "November 12, 2008","May 19, 2014", "December 6, 2012"],
        correct_answer: "June 26, 2015",
        correct_feedback: "That's right! Do you remember when the entire internet turned into a giant rainbow?", 
        incorrect_feedback: "Incorrect. The victory of marraige equality came on June 26th, 2015",
        //photo by Nick Karvounis on Unsplash
        image: "images/rings.jpg", 
        alt: "two hands wearing wedding rings"
    }, 
]