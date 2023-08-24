var playerInput;
var playerChoice;
var cpuInput;
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
	cpuInput = Math.floor(Math.random() * 3);
	console.log(cpuInput);
	checkCpuInput();
}

function checkCpuInput() {
	cpuChoice = choices[cpuInput];
	console.log("CpuChoice is: " + cpuChoice);
}

function findWinner() {
	if (playerChoice === cpuChoice) {
		console.log("TIE");
	} else if (playerChoice === "r") {
		if (cpuChoice === "p") {
			console.log("CPU wins");
		} else {
			console.log("Player wins");
		}
	} else if (playerChoice === "p") {
		if (cpuChoice === "s") {
			console.log("CPU wins");
		} else {
			console.log("Player wins");
		}
	} else if (playerChoice === "s") {
		if (cpuChoice === "r") {
			console.log("CPU wins");
		} else {
			console.log("Player wins");
		}
	}
}
