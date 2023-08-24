var playerInput;
var playerChoice;
var cpuChoice;

var playAgain = false;

var score = {
	wins: 0,
	losses: 0,
	ties: 0,
};

function getPlayerInput() {
	playerInput = prompt("R for rock, P for paper, S for scissors");

	if (playerInput != null) {
		checkPlayerInput();
	}
}

function checkPlayerInput() {
	if (playerInput === "R" || playerInput === "r") {
		playerChoice = "rock";
	} else if (playerInput === "P" || playerInput === "p") {
		playerChoice = "paper";
	} else if (playerInput === "S" || playerInput === "s") {
		playerChoice = "scissors";
	} else {
		getPlayerInput();
	}
}
