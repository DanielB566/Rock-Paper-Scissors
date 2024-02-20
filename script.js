
let username = prompt('What is your name?:'); // asks for name stores info to be used later!

while (username === null) {
    username = prompt('Please enter a vaild name:'); // countines to ask for name until they enter a vaild response
}

document.getElementById('username').innerHTML = username; // goes into html to insert Name infront of the score.

// starting score
let playscore = 0
let computerScore = 0

// def variables 
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const result = document.getElementById('result');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissor');











