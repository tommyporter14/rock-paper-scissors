
function getComputerChoice(){
    let number = Math.random().toFixed(3);
    console.log(number);
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

console.log(getComputerChoice());