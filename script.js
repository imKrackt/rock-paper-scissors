let playerScore = 0;
let computerScore = 0;
let messageContent = "Welcome to Rock, Paper, Scissors!";
let playerAnswer = "";
let computerAnswer = "";
let userResponse = "";

const container = document.querySelector('#container');

const rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
rockBtn.className = "selectionBtn";
container.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
paperBtn.className = "selectionBtn";
container.appendChild(paperBtn);

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
scissorsBtn.className = "selectionBtn";
container.appendChild(scissorsBtn);

const scoreBoard = document.createElement('div');
scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
container.appendChild(scoreBoard);

const message = document.createElement('div');
message.textContent = `${messageContent}`;
container.appendChild(message);

const selectionBtns = document.querySelectorAll('.selectionBtn');
selectionBtns.forEach((button) => {
    button.addEventListener('click', playerSelection);
    button.addEventListener('click', computerSelection);
    button.addEventListener('click', playRound);
    button.addEventListener('click', winnerCheck) 
});

function playerSelection() {
    playerAnswer = this.textContent.toLowerCase();
    console.log(playerAnswer)
}

function computerSelection() {
    const computerChoices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    computerAnswer = computerChoices[randomIndex];
    console.log(computerAnswer);
}

function playRound() {
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (playerAnswer === computerAnswer) {
        messageContent = "Tie."
    } else if (winConditions[playerAnswer] === computerAnswer) {
        messageContent = "You win this round.";
        playerScore += 1
    } else {
        messageContent = "The computer wins this round.";
        computerScore += 1;
    }

    scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    message.textContent = `${messageContent}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    messageContent = "Welcome to Rock, Paper, Scissors!"
    scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    message.textContent = `${messageContent}`;
}

function winnerCheck() {
    if (playerScore === 5) {
        messageContent = "You win!";
        const userResponse = window.prompt("Do you want to play again? (yes/no)");
            if (userResponse.toLowerCase() === "yes") {
                resetGame();
            }
    } else if (computerScore === 5) {
        messageContent = "The computer wins!";
        const userResponse = window.prompt("Do you want to play again? (yes/no)");
            if (userResponse.toLowerCase() === "yes") {
                resetGame();
                }
    }     
}