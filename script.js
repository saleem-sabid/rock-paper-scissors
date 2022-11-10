
//the computer should randomly return one of the values rock , paper , scissors
let choices = ['rock', 'paper', 'scissors'];
let yourScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const index = Math.floor((Math.random() * choices.length));
    return choices[index];
}


let computerSelection = getComputerChoice();


let userInput = prompt("Choose Rock , Paper or Scissors ?");



//run the if else command to check the round winner
function playRound(playerSelection, computerSelection) {
    let a = playerSelection;
    let b = computerSelection;

    if (a === b) {
        console.log("Its a Tie");
    }
    else if (a === 'rock' && b === "paper") {
        console.log("Computer Win one point ");
        computerScore++;
    }
    else if (a === 'rock' && b === "scissors") {
        console.log("You Win one point ");
        yourScore++;
    }
    else if (a === 'paper' && b === "rock") {
        console.log("You Win one point ");
        yourScore++;
    }
    else if (a === 'paper' && b === "scissors") {
        console.log("Computer Win one point ");
        computerScore++;
    }
    else if (a === 'scissors' && b === "paper") {
        console.log("you Win one point ");
        yourScore++;
    }
    else if (a === 'scissors' && b === "rock") {
        console.log("Computer Win one point ");
        computerScore++;
    }
    else {
        console.log("enter valid input");
    }
}

let playerSelection = userInput.toLowerCase();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);

    }
}


game();
console.log(playerSelection, computerSelection, yourScore, computerScore);

