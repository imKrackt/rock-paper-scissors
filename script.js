/* let computerSelection = "";

let playerSelection = "";

let winnerText = "";

let result = "";

let playerHas = "Player has selected ";

let playerScore = 0;

let computerScore = 0;

function getComputerChoice() {
    let words = ['rock', 'paper', 'scissors']
    computerSelection = words[Math.floor(Math.random()*words.length)];
    return "Computer is ready.";
}

function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?", "").toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerHas + playerSelection;
    } else {
        alert("Try again.")
        getPlayerChoice();
    } 
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        winnerText = "Computer also chose " + computerSelection + ", so go again!";
        return winnerText;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        winnerText = "Computer wins! Player loses. Play again.";
        return winnerText;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        winnerText = "Computer wins! Player loses. Play again.";
        return winnerText;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        winnerText = "Computer wins! Player loses. Play again.";
        return winnerText;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        winnerText = "Player wins! Computer loses. Play again.";
        return winnerText;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        winnerText = "Player wins! Computer loses. Play again.";
        return winnerText;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        winnerText = "Player wins! Computer loses. Play again.";
        return winnerText;
    } 
    };    

function game() {
    result = playRound(computerSelection, playerSelection);
    return result;
}

function scoreTally() {
//  let gameScorePhrase = "Computer: " + (computerScore) + "   Player: " + (playerScore);
    if (result == "Computer wins! Player loses. Play again.") {
        computerScore = computerScore + 1;
        return "Computer: " + computerScore + "   Player: " + playerScore;
    } else if (result == "Player wins! Computer loses. Play again.") {
        playerScore = playerScore + 1;
        return "Computer: " + computerScore + "   Player: " + playerScore;
    } else {
        computerScore = computerScore + 0;
        playerScore = playerScore + 0;
        return "Computer: " + computerScore + "   Player: " + playerScore;
    }
}

function winner() {
    if (computerScore > playerScore) {
        alert("Computer has won Rock, Paper, Scissors. Silly player, try again.")
    } else if (computerScore < playerScore) {
        alert("Player has won Rock, Paper, Scissors. Silly computer, try again.")
    } else if (computerScore === playerScore) {
        alert("This is rather unlikely, isn't it? I guess try again.")
    }
} */
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

function winnerCheck() {
    if (playerScore === 5) {
        messageContent = "You win!";
        const userResponse = window.prompt("Do you want to play again? (yes/no)");
            if (userResponse.toLowerCase() === "yes") {
                playerScore = 0;
                computerScore = 0;
                messageContent = "Welcome to Rock, Paper, Scissors!"
                scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
                message.textContent = `${messageContent}`;
            }
    } else if (computerScore === 5) {
        messageContent = "The computer wins!";
        const userResponse = window.prompt("Do you want to play again? (yes/no)");
            if (userResponse.toLowerCase() === "yes") {
                playerScore = 0;
                computerScore = 0;
                messageContent = "Welcome to Rock, Paper, Scissors!"
                scoreBoard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
                message.textContent = `${messageContent}`;
                }
    }     
}