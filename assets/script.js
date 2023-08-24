var playerInput;
var playerChoice;
var cpuChoice;
var choices = ["r", "p", "s"];

var playAgain = true;

var score = {
	wins: 0,
	losses: 0,
	ties: 0,
};

function playGame() {
	console.clear();
	getPlayerInput();
	getCpuInput();
	findWinner();
	displayScore();
	askToPlayAgain();
}

function getPlayerInput() {
	playerInput = prompt("R for rock, P for paper, S for scissors");

	if (playerInput != null) {
		checkPlayerInput();
	}
}

function checkPlayerInput() {
	if (playerInput === "R" || playerInput === "r") {
		playerChoice = choices[0];
	} else if (playerInput === "P" || playerInput === "p") {
		playerChoice = choices[1];
	} else if (playerInput === "S" || playerInput === "s") {
		playerChoice = choices[2];
	} else {
		getPlayerInput();
	}
	console.log("PlayerChoice is: " + playerChoice);
}

function getCpuInput() {
	cpuChoice = choices[Math.floor(Math.random() * 3)];
	alert("CPU picked: " + cpuChoice);
	console.log("CpuChoice is: " + cpuChoice);
}

function findWinner() {
	if (playerChoice === cpuChoice) {
		alert("TIE!");
		score.ties++;
		console.log("TIE");
	} else if (playerChoice === "r") {
		if (cpuChoice === "p") {
			alert("CPU WINS!");
			score.losses++;
			console.log("CPU wins");
		} else {
			alert("PLAYER WINS!");
			score.wins++;
			console.log("Player wins");
		}
	} else if (playerChoice === "p") {
		if (cpuChoice === "s") {
			alert("CPU WINS!");
			score.losses++;
			console.log("CPU wins");
		} else {
			alert("PLAYER WINS!");
			score.wins++;
			console.log("Player wins");
		}
	} else if (playerChoice === "s") {
		if (cpuChoice === "r") {
			alert("CPU WINS!");
			score.losses++;
			console.log("CPU wins");
		} else {
			alert("PLAYER WINS!");
			score.wins++;
			console.log("Player wins");
		}
	}
}

function displayScore() {
	alert(
		"WINS: " + score.wins + " LOSSES: " + score.losses + " TIES: " + score.ties
	);
}

function askToPlayAgain() {
	playAgain = confirm("Play again?");
	if (playAgain) {
		playGame();
	}
}
