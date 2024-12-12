let humanScore = 0;
let computerScore = 0;

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
    } else if (humanChoice==="Rock" && computerChoice==="Paper"){
        computerScore++;
        message = "You lose! Paper beats rock.";
    } else if (humanChoice==="Rock" && computerChoice==="Scissors"){
        humanScore++;
        message = "You win! Rock beats scissors.";
    } else if (humanChoice==="Paper" && computerChoice==="Rock"){
        humanScore++;
        message = "You win! Paper beats rock.";
    } else if (humanChoice==="Paper" && computerChoice==="Scissors"){
        computerScore++;
        message = "You loose! Paper beats rock.";
    } else if (humanChoice==="Scissors" && computerChoice==="Paper"){
        humanScore++;
        message = "You win! Scissors beats paper.";
    } else {
        computerScore++;
        message = "You loose! Rock beats scissors.";
    }

    playerChoice.textContent = `Player: ${humanChoice}`;
    resultRound.textContent = `${message}`;
    playerScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
}

/* 
TO DO: work on playGame (5 rounds then final winner), work on scoring system, work on styles
*/

 /*  function playGame(){
    let message;
    for (let i=0; i<5; i++){
        if (humanScore == 3){
            message = "ROUND: " + i+1 + " GAME OVER: YOU WIN!"
        } else if (computerScore == 3) {
             message = "ROUND: " + i+1 + " GAME OVER: YOU LOOSE!"
        } else {
            message = "ROUND: " + i+1 + " PLAY NEXT";
        }
        console.log(message);
        return message;
    }
  } */