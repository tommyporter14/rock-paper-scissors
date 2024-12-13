let humanScore = 0;
let computerScore = 0;
let round = 0;

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultRound = document.getElementById("resultRound");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

function getComputerChoice(){
    let number = Math.random().toFixed(3);
    let choice;
    if (number >= 0 && number < 0.333){
        choice = "Rock";
    } else if (number >= 0.333 && number < 0.666){
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    computerChoice.textContent = `Computer: ${choice}`;
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let message;
        if (humanChoice===computerChoice){
            message = "Tie!";
            round++;
        } else if (humanChoice==="Rock" && computerChoice==="Paper"){
            computerScore++;
            round++;
            if (humanScore === 5){
                window.location.href = "win.html";
            }
            else if (computerScore === 5){
                window.location.href = "lose.html";
            }
            message = "You lose! Paper beats rock.";
        } else if (humanChoice==="Rock" && computerChoice==="Scissors"){
            humanScore++;
            round++;
            if (humanScore === 5){
                window.location.href = "win.html";
            }
            else if (computerScore === 5){
                window.location.href = "lose.html";
            }
            message = "You win! Rock beats scissors.";
        } else if (humanChoice==="Paper" && computerChoice==="Rock"){
            humanScore++;
            round++;
            if (humanScore === 5){
                window.location.href = "win.html";
            }
            else if (computerScore === 5){
                window.location.href = "lose.html";
            }
            message = "You win! Paper beats rock.";
        } else if (humanChoice==="Paper" && computerChoice==="Scissors"){
            computerScore++;
            round++;
            if (humanScore === 5){
                window.location.href = "win.html";
            }
            else if (computerScore === 5){
                window.location.href = "lose.html";
            }
            message = "You loose! Paper beats rock.";
        } else if (humanChoice==="Scissors" && computerChoice==="Paper"){
            humanScore++;
            round++;
            if (humanScore === 5){
                window.location.href = "win.html";
            }
            else if (computerScore === 5){
                window.location.href = "lose.html";
            }
            message = "You win! Scissors beats paper.";
        } else {
            computerScore++;
            round++;
            if (humanScore === 5){
                window.location.href = "win.html";
            }
            else if (computerScore === 5){
                window.location.href = "lose.html";
            }
            message = "You loose! Rock beats scissors.";
        }
    playerChoice.textContent = `Player: ${humanChoice}`;
    resultRound.textContent = `Round: ${round} - ${message}`;
    playerScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
}

/* 
TO DO: work on styles
*/