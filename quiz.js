'use strict';

$(document).ready(function() {
	$('.restart').click(function() {
		location.reload();
	});

	//Variable to keep score
	let score = 0;
	//Variable tp store the current index of the question number in the array
	let questionNumber;
	//
	let currentQuestionObject;

	//Hide the quiz and play again button initially (can do in CSS with display:none)
	$('#quiz').hide();
	$('.finalPage').hide();
	$('.progress').hide();
	$('.score').hide();

	//This poplulates the header and instructions upon page load
	$('header').text('All movements have a history');
	$('.instructions').text('Learn about ours here');

	function hideQuizData() {
		$('#question').hide();
		$('#supporting_info').hide();
        $('.currentImage').hide();
        $('.currentImage').removeAttr('src');
		$('.submit').hide();
		$('ul').hide();
		$('.progress').hide();
		$('.score').hide();
	}

	//When user clicks 'Start Quiz', show quiz and hide start page
	$('.beginQuiz').on('click', () => {
		questionNumber = 0;
		$('.startPage').hide();
		$('header').hide();
		$('feedback').hide();
		// $(".coverImage").hide();
		$('#quiz').show();

		//Display what number of question the user is on
		displayProgress(questionNumber);
		populateQuestion();
	});

	//Populate form with questions and images and hide empty feedback div
	function populateQuestion() {
		//This variable represents accessing the current question number inside of the quizData array
		currentQuestionObject = quizData[questionNumber];
		// console.log(quizData[questionNumber]);
		$('.feedback').hide();
		// console.log(currentQuestionObject);
		$('#supporting_info').text(currentQuestionObject.supporting_info);
		$('#question').text(currentQuestionObject.question);
		$('.currentImage').attr('src', currentQuestionObject.image);

		//Populate form with answer choices
		for (let i = 0; i < 4; i++) {
   			$(`#label${i + 1}`).text(currentQuestionObject.options[i]);
		}
    }

	//When user clicks submit
	$('.submit').click(function(event) {
		currentQuestionObject = quizData[questionNumber];
		//Check for the value of whatever the user selected
		const checked = $('input:checked').val();
		if(checked!=undefined){
			//Get the text from the value user selected (above)
			const selectedAnswer = $(`#label${checked}`).text();

			//Prevent dafault behavior (do not actually submit quiz)
			event.preventDefault();
			//Hide all quiz data
			hideQuizData();

			//This variable holds the answerFeedback function which determines whether a user's answer
			//matched the correct answer or not.
			const feedbackString = answerFeedback(selectedAnswer, currentQuestionObject);
			

			//This shows the feedback div and populates it with text explaining the user either was
			//correct or incorrect
			$('.feedback').show().text(feedbackString);
			//This repopulates the questions div and hides the feedback after 2 seconds,
			setTimeout(function() {
				$('ul').show();
				$('#supporting_info').show();
				$('#question').show();
				$('.currentImage').show();
				$('.submit').show();
				$('.feedback').hide();
				$('.finalPage').hide();
				$('.results').hide();
				$('.feedback').removeClass("feedback_correct feedback_incorrect");
				$('.restart').show();

				++questionNumber;
				if (questionNumber < quizData.length) {
					populateQuestion();
					displayProgress(questionNumber, score);
				} else {
					finalPage();
					hideQuizData();
				}

				console.log('Question number', questionNumber);
			}, 4000);
		} else {
			alert('Please select an answer');
		}
	});

	//This function compares the users selected answer to the actual correct answer and increases the score if correct.
	function answerFeedback(selectedAnswer, questionObject) {
		//console.log('Question Object:', questionObject);
		//console.log('Selected answer:', selectedAnswer)
		if (questionObject.correct_answer === selectedAnswer) {
			// user selected correct answer
			$('.feedback').addClass("feedback_correct");
			++score;
			//console.log("correct answer", score)
			return questionObject.correct_feedback;
		} else {
			// User selected incorrect answer
			//console.log("incorrect answer", score)
			$('.feedback').addClass("feedback_incorrect");
			return quizData[questionNumber].incorrect_feedback;
		}
	}

	function displayProgress(currentQuestionNumber) {
		$('.progress').show().text(`Question ${currentQuestionNumber + 1}/5`);
		//console.log('Quiz Status:', currentQuestionNumber)
		$('.score').show().text(`Correct: ${score}/5`);
	}

	//Need some code that shows the finalPage div once the last question has been asked
	function finalPage() {
		//when last questions ends (how to do I write that in code?) hide all quiz Data
		hideQuizData();
		//show final page
		$('.finalPage').show();
		//display final score
		if (score >= 4) {
		$('.results').show().text(`Congratulations! You got ${score}/5 questions correct.`);
		//give option to restart quiz
		$('.restart').show();
		} else {
		$('.results').show().text(`Yikes. You got ${score}/5 questions correct. It's time to study up on your queer history.`);
	
		}
	}
}); // closes doc.ready function
