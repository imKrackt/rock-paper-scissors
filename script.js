let computerSelection = "";

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
}

for (let i = 0; i < Infinity; i++) {
    for (let i = 0; i < 5; i++) {
        console.log(getComputerChoice())

        console.log(getPlayerChoice())
        
        console.log(game())

        console.log(scoreTally())
    }

    console.log(winner());
}