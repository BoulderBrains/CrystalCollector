// Setting some empty variable to use later
var wins = 0;
var losses = 0;

$("#wins").append(wins);
$("#losses").append(losses);

// Trigger findTargerNumber function
findTargetNumber();

// set up a user score variable set to 0
var userScore = 0;

// display the user score variable on the page
$(".score").append(userScore);

// set up click handlers to increase userScore by the crystal point amount
$(".crystal").click(function(userScore) {
	//get the value off a crystal
	var crystalValue = $(this).val();
	console.log(crystalValue + " crystalValue");
	var updatedScore = parseInt(crystalValue) + userScore;
	console.log(parseInt(updatedScore) + " updatedScore");
	// display the updatedScore variable on the page
	$(".score").html(updatedScore);

	// if userScore === targetNumber { player wins, wins++, game restarts }
	if (userScore === findTargetNumber.targetNumber) {
		wins++;
		alert("you win");
		reset();
	}
	// if userScore > targetNumber { player loses, losses++, game restarts }
	if (userScore > findTargetNumber.targetNumber) {
		losses++;
		alert("you lose");
		reset();
	}

});

// On restart() {
function reset() {
	// find & set a new targetNumber
	findTargetNumber(targetNumber);
	// set userScore back to 0
	userScore = 0;
}
// set up wins and losses variables


function findTargetNumber(targetNumber) {
	// create targetNumber and set it to a random number
	var targetNumber = Math.floor((Math.random() * 99) + 1);

	// display that targetVariable in the .target-number div
	$(".target-number").append(targetNumber);
}
