// console.log("yooo bish");

// function getHumanChoice() {
//     let choice = prompt("Rock, Paper or Scissors?").trim();
//     choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
//     console.log(`You chose ${choice}.`);
//     return choice;
// }

function getComputerChoice() {
    let num = Math.random()*3
    let choice = (
        num < 1 ? "Rock" :
        num < 2 ? "Paper" :
        "Scissors"
    );

    // console.log(`Computer chose ${choice}.`);
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let textDiv = document.querySelector(".hero-text");
    let scoreboard = document.querySelector(".scoreboard");
    document.querySelectorAll(".selection").forEach((button) => {
            button.addEventListener('click', () => 
                playRound(button.getAttribute('choice-name'),getComputerChoice())
        )
    });
    document.querySelector(".reset").addEventListener("click",  () => {
        scoreboard.textContent = "You: 0, Computer: 0";
        humanScore = 0;
        computerScore = 0;
    })

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === undefined || computerChoice == undefined)
            return

        textDiv.textContent = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}`
        if (humanChoice === computerChoice) {
            textDiv.textContent += `\nDraw, ${humanChoice} draws ${computerChoice}`;
        } else if (
            humanChoice === "Scissors" && computerChoice === "Paper" ||
            humanChoice === "Paper" && computerChoice === "Rock" ||
            humanChoice === "Rock" && computerChoice === "Scissors"
        ) {
            textDiv.textContent += `\nYou Won, ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } else {
            textDiv.textContent += `\nYou Lost, ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        }
        scoreboard.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
    }
    
    // let result_string = ""
    // if (humanScore > computerScore) {
        //     result_string = "YOU WON!";
        // } else if (computerScore > humanScore) {
            //     result_string = "YOU LOST :(";
            // } else {
                //     result_string = "DRAW :|";
                // }

    // alert(
    //     `Scores:
    //     You: ${humanScore}
    //     Computer: ${computerScore}
    //     ${result_string}`
    // )
}

playGame()