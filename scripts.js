let humanScore = 0;
let computerScore = 0;

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
    return choice;
}

/* Left in on next commit to show original function, will clean up in final
function getHumanChoice(val){
    console.log(val);
    return val;
} */

function playRound(humanChoice, computerChoice) {
    let message;
    console.log("You picked: " + humanChoice);
    console.log("The computer picked: " + computerChoice);
    if (humanChoice==computerChoice){
        message = "Tie!";
    } else if (humanChoice=="Rock" && computerChoice=="Paper"){
        computerScore++;
        message = "You lose! Paper beats rock.";
    } else if (humanChoice=="Rock" && computerChoice=="Scissors"){
        humanScore++;
        message = "You win! Rock beats scissors.";
    } else if (humanChoice=="Paper" && computerChoice=="Rock"){
        humanScore++;
        message = "You win! Paper beats rock.";
    } else if (humanChoice=="Paper" && computerChoice=="Scissors"){
        computerScore++;
        message = "You loose! Paper beats rock.";
    } else if (humanChoice=="Scissors" && computerChoice=="Paper"){
        humanScore++;
        message = "You win! Scissors beats paper.";
    } else {
        computerScore++;
        message = "You loose! Rock beats scissors.";
    }
    console.log(message);
    return message;
  }