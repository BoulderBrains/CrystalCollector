// Setting some empty variable to use later
var wins = 0;
var losses = 0;
var userScore = 0;
var targetNumber = 0;

// appending wins and losses to page for display for user
$("#wins").append(wins);
$("#losses").append(losses);

$(".crystal").click(function() {
	//get the value off a crystal
	var crystalValue = $(this).val();
	
	// resetting userScore to the previous userScore + the value of the crystal that was clicked
	userScore = parseInt(crystalValue) + userScore;
	
	// display the userScore variable on the page
	$("#score").text(userScore);

	// if userScore === targetNumber { player wins, wins++, print increased wins to page, alert the suer, reset game }
	if (userScore === targetNumber) {
		wins++;
		$("#wins").text(wins);
		alert("you win");
		reset();
	}
	// if userScore > targetNumber { player loses, losses++, print incresed losses to page, alert the user, reset game }
	if (userScore > targetNumber) {
		losses++;
		$("#losses").text(losses);
		alert("you lose");
		reset();
	}
});

function generateTargetNumber() {
	// create targetNumber variable and set it to a random number
	targetNumber = Math.floor((Math.random() * 120) + 1);

	// display that targetVariable in the .target-number div
	$("#target-number").text(targetNumber);
}

function reset() {
	// find & set a new targetNumber
	generateTargetNumber();

	// set userScore back to 0
	userScore = 0;

	// display the reset userScore variable to the page
	$("#score").text(userScore);
}

// On click of the #hard-reset button, trigger that function
$("#hard-reset").on("click", hardReset);

function hardReset() {
	// forces a page reload which will reset the user's wins & losses
	location.reload();
}

// This starts the game
reset();