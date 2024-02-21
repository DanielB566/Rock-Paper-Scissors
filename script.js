let username = prompt('What is your name?:'); // asks for name stores info to be used later!

while (username === null) {
    username = prompt('Please enter a vaild name:'); // countines to ask for name until they enter a vaild response
    break;
}

document.getElementById('username').innerHTML = username; // goes into html to insert Name infront of the score.

// starting score
let playscore = 0
let computerScore = 0
let moves = 5

// def variables 
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const result = document.getElementById('result');
const movesleft = document.getElementById('moves')


const resetBtn = document.getElementById('reset')





// computer choice
function computerchoice(){
    const rndNum = Math.floor(Math.random() * 3);

    if (rndNum === 1){
        return 'rock'
    }
    else if (rndNum === 2){
        return 'paper'
    }
    else{
        return 'scissor'
    }
}

// user choice
function game(userChoice){
    
    computerchoice()

    if (userChoice === computerchoice) {
        outcomeElement.textContent = 'It\'s a tie!';
        moves--;
    }
    else if (userChoice === 'rock' && computerchoice === 'scissor'  ) || (userChoice === 'paper' && computerchoice === 'rock') || (userChoice === 'scissor' && computerchoice === 'paper'){
        outcomeElement.textContent = 'You won!';
        playerScoreElement++;
        moves--;
    }
    else {
        outcomeElement.textContent = 'You lose!';
        computerScoreElement++;
        moves--;
    }
}




