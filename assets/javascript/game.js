// Setting some empty variable to use later
var wins = 0;
var losses = 0;

$("#wins").append(wins);
$("#losses").append(losses);

// set up a user score variable set to 0
var userScore = 0;
var targetNumber = 0;

// set up click handlers to increase userScore by the crystal point amount
$(".crystal").click(function() {
	console.log(userScore);
	//get the value off a crystal
	var crystalValue = $(this).val();
	console.log(crystalValue + " crystalValue");
	userScore = parseInt(crystalValue) + userScore;
	console.log(parseInt(userScore) + " updatedScore");
	// display the userScore variable on the page
	$(".score").html(userScore);

	// if userScore === targetNumber { player wins, wins++, game restarts }
	if (userScore === targetNumber) {
		wins++;
		$("#wins").text(wins);
		alert("you win");
		reset();
	}
	// if userScore > targetNumber { player loses, losses++, game restarts }
	if (userScore > targetNumber) {
		losses++;
		$("#losses").text(losses);
		alert("you lose");
		reset();
	}

});

// On restart() {
function reset() {
	// find & set a new targetNumber
	generateTargetNumber();
	// set userScore back to 0
	userScore = 0;
	// display the user score variable on the page
	$(".score").text(userScore);
}


function generateTargetNumber() {
	// create targetNumber and set it to a random number
	targetNumber = Math.floor((Math.random() * 99) + 1);

	// display that targetVariable in the .target-number div
	$(".target-number").text(targetNumber);
}

// This starts the game
reset();