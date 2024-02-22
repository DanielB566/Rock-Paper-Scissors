let username = prompt('What is your name?:'); // asks for name stores info to be used later!

while (username === null) {
    username = prompt('Please enter a vaild name:'); // countines to ask for name until they enter a vaild response
    break;
}

document.getElementById('username').innerHTML = username; // goes into html to insert Name infront of the score.

// starting score
let playScore = 0
let computerScore = 0
let roundsplayed = 0


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


function reset(){
    playScore = 0
    computerScore = 0
    roundsplayed = 0

    document.getElementById('playerScore').textContent = `${username} Score: ${playScore}`
    document.getElementById('ComputerScore').textContent = `Computer's Score: ${computerScore}`;
    document.getElementById('moves').textContent = `Rounds played: ${roundsplayed}`;
    document.getElementById('result').textContent = ''
}

// user choice
function game(userChoice){
    
    computerchoice()

    if (userChoice === computerchoice()) {
        result.textContent = 'It\'s a tie!';
        roundsplayed++;
    }
    else if (userChoice === 'rock' && computerchoice() === 'scissor' || userChoice === 'paper' && computerchoice() === 'rock' || userChoice === 'scissor' && computerchoice() === 'paper'){
        result.textContent = 'You won!';
        playScore++;
        roundsplayed++;
    }
    else {
        result.textContent = 'You lose!';
        computerScore++;
        roundsplayed++;
    }

    // Update the score elements
    document.getElementById('playerScore').textContent = `${username} Score: ${playScore}`;
    document.getElementById('moves').textContent = `Rounds played: ${roundsplayed}`;
    document.getElementById('ComputerScore').textContent = `Computer's Score: ${computerScore}`;

    if (roundsplayed === 6){
        reset()
    } 

    document.getElementById('playerchoice').textContent = `${username} threw: ${userChoice}`
    document.getElementById('compchoice').textContent = `Computer threw: ${computerchoice()}`
}

function messages(){
    let winmsg = ['Victory is yours! You/re a Rock Paper Scissors champion!', 'Congratulations! You outsmarted the computer this time', 'Well done! You crushed it in Rock-Paper-Scissors. Can you keep the streak going?']
    let losemsg = ['Tough luck! The computer got the best of you this time. Try again!', 'It happens to the best of us. Don/t give up! Another round awaits.', 'A valiant effort, but luck wasn/t on your side this time.']
    let tiemsg = ['No winner this time! A tie in Rock-Paper-Scissors.', 'Neither victory nor defeat! You and the computer are in perfect harmony this round.']

    if (roundsplayed === 6 && playScore === computerScore){
        let rndIndex = Math.floor(Math.random() * tiemsg.length);
        document.getElementById('randommsg').textContent = tiemsg[rndIndex]
    }
    else if (roundsplayed === 6 && playScore > computerScore){
        let rndIndex = Math.floor(Math.random() * winmsg.length);
        document.getElementById('randommsg').textContent = winmsg[rndIndex]

    }
    else{
        let rndIndex = Math.floor(Math.random() * losemsg.length);
        document.getElementById('randommsg').textContent = losemsg[rndIndex]
    }
}










