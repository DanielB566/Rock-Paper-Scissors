let username = prompt('What is your name?:'); // asks for name stores info to be used later!

while (username === null) {
    username = prompt('Please enter a vaild name:'); // countines to ask for name until they enter a vaild response
    break;
}


document.getElementById('username').innerHTML = username; // goes into html to insert Name infront of the score.
document.getElementById('reset').classList.toggle('d-none')

// starting score
let playScore = 0
let computerScore = 0
let roundsplayed = 0
let color


let winmsg = ['Victory is yours! You/re a Rock Paper Scissors champion!', 'Congratulations! You outsmarted the computer this time', 'Well done! You crushed it in Rock-Paper-Scissors. Can you keep the streak going?']
let losemsg = ['Tough luck! The computer got the best of you this time. Try again!', 'It happens to the best of us. Don/t give up! Another round awaits.', 'A valiant effort, but luck was not on your side this time.']
let tiemsg = ['No winner this time! A tie in Rock-Paper-Scissors.', 'Neither victory nor defeat! You and the computer are in perfect harmony this round.']


// computer choice
function computerchoice(){
    const rndNum = Math.floor(Math.random() * 3);

    if (rndNum === 0){
        return 'rock'
    }
    else if (rndNum === 1){
        return 'paper'
    }
    else{
        return 'scissor'
    }
}


function reset(){ // function for reset button
    playScore = 0
    computerScore = 0
    roundsplayed = 0

    document.getElementById('playerScore').textContent = `${username} Score: ${playScore}`
    document.getElementById('ComputerScore').textContent = `Computer's Score: ${computerScore}`;
    document.getElementById('moves').textContent = `Rounds played: ${roundsplayed}`;
    document.getElementById('result').textContent = ''
    document.getElementById('playerchoice').textContent = ``;
    document.getElementById('compchoice').textContent = ``;

    document.getElementById('rock').classList.toggle('d-none'); // toggle for the reset but to bring back rock paper sccissors button
    document.getElementById('paper').classList.toggle('d-none');
    document.getElementById('scissor').classList.toggle('d-none');
    document.getElementById('randommsg').textContent = ''
    document.getElementById('result').classList.toggle('d-none');
    document.getElementById('reset').classList.toggle('d-none')
   

}

// user choice
    
    function game(userChoice) {
        const computerChoice = computerchoice(); // Store the computer's choice
        
        
        if (userChoice === computerChoice) {
            result.textContent = 'It\'s a tie!';
            roundsplayed++;
            result.classList.remove("redText");
            result.classList.remove("greenText")

            
        } else if (userChoice === 'rock' && computerChoice === 'scissor' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissor' && computerChoice === 'paper') {
            result.textContent = 'You won!';
            result.classList.add("greenText");
            result.classList.remove("redText")
            playScore++;
            roundsplayed++;
         
        } else {
            result.textContent = 'You lose!';
            result.classList.add("redText");
            result.classList.remove("greenText")
            computerScore++;
            roundsplayed++;
           
        }

        endGame()
    
        // Update the score elements
        document.getElementById('playerScore').textContent = `${username} Score: ${playScore}`;
        document.getElementById('moves').textContent = `Rounds played: ${roundsplayed}`;
        document.getElementById('ComputerScore').textContent = `Computer's Score: ${computerScore}`;
        document.getElementById('playerchoice').textContent = `${username} threw: ${userChoice}`  ;
        document.getElementById('compchoice').textContent = `Computer threw: ${computerChoice}`;

        if (roundsplayed === 5){ // removes buttons once round 5 is reached
            document.getElementById('rock').classList.toggle('d-none');
            document.getElementById('paper').classList.toggle('d-none');
            document.getElementById('scissor').classList.toggle('d-none');
            document.getElementById('result').classList.toggle('d-none');
            document.getElementById('reset').classList.toggle('d-none')
         }

     
    }


function endGame(){ // random generated message to send after the game is over
  
    if (roundsplayed === 5 && playScore === computerScore){
        let rndIndex = Math.floor(Math.random() * tiemsg.length);
        document.getElementById('randommsg').textContent = tiemsg[rndIndex]
    }
    else if (roundsplayed === 5 && playScore > computerScore){
        let rndIndex = Math.floor(Math.random() * winmsg.length);
        document.getElementById('randommsg').textContent = winmsg[rndIndex]
        confetti();

    }
    else if (roundsplayed === 5 && playScore < computerScore){
        let rndIndex = Math.floor(Math.random() * losemsg.length);
        document.getElementById('randommsg').textContent = losemsg[rndIndex]
    }

}










