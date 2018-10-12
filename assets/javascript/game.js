// create targetNumber and set it to a random number
var targetNumber = Math.floor((Math.random() * 99) + 1);

// display that targetVariable in the .target-number div
$(".target-number").append(targetNumber);

// assign each crystal a point value
// $("#crystal-one").val(1);
// $("#crystal-two").val(7);
// $("#crystal-three").val(19);
// $("#crystal-four").val(6);
//Not sure this worked yet

// set up a user score variable set to 0
var userScore = 0;

// display the user score variable on the page
$(".score").append(userScore);

// set up click handlers to increase userScore by the crystal point amount
$(".crystal").click(function() {
	//get the value off a crystal
	var crystalValue = this.$(".crystal").val();	
	console.log(crystalValue + " crystalValue");
	updatedScore = this.crystalValue + userScore;
	console.log(updatedScore + " updatedScore");

});
// if userScore === targetNumber { player wins, wins++, game restarts }
// if userScore > targetNumber { player loses, losses++, game restarts }
// On restart() {
	// set a new targetNumber
	// set new values to crystals
	// userScore = 0; }
// set up wins and losses variables