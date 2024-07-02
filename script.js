// console.log("yooo bish");

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").trim();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    console.log(`You chose ${choice}.`);
    return choice;
}

function getComputerChoice() {
    let num = Math.random()*3
    let choice = (
        num < 1 ? "Rock" :
        num < 2 ? "Paper" :
        "Scissors"
    );

    console.log(`Computer chose ${choice}.`);
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert(`Draw, ${humanChoice} draws ${computerChoice}`);
        } else if (
            humanChoice === "Scissors" && computerChoice === "Paper" ||
            humanChoice === "Paper" && computerChoice === "Rock" ||
            humanChoice === "Rock" && computerChoice === "Scissors"
        ) {
            alert(`You Won, ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        } else {
            alert(`You Lost, ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    let result_string = ""
    if (humanScore > computerScore) {
        result_string = "YOU WON!";
    } else if (computerScore > humanScore) {
        result_string = "YOU LOST :(";
    } else {
        result_string = "DRAW :|";
    }

    alert(
        `Scores:
        You: ${humanScore}
        Computer: ${computerScore}
        ${result_string}`
    )
}

playGame()