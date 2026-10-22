function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());


    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener('click', () => {
        playGame('rock');
    });
    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        playGame('paper');
    });
    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        playGame('scissors');
    });


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
}
