let options = ["Rock", "Paper", "Scissors"];

const humanScore = document.querySelector(".humanScoreNumber");
const computerScore = document.querySelector(".computerScoreNumber");
const playGameBtn = document.querySelector(".playGameBtn");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const playRoundCard = document.querySelector(".roundResultCard");
const playRoundResultText = document.createElement("h2");
playRoundCard.append(playRoundResultText);

window.onload = disableChoices;

function disableChoices(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function getComputerChoice(){

    return options[Math.floor(Math.random() * options.length)]
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let validOption = "Not a valid option!";
    options.filter((string) => {
        if(string.toLowerCase() === choice){
            validOption = string;
        }
    })
    return validOption;
}

function playRound(computerChoice, humanChoice){

    if(humanChoice == computerChoice){
        playRoundResultText.textContent = "This round was a draw!";
        console.log("This round was a draw!");
    }
    else if(humanChoice == "Rock"){
        if(computerChoice == "Paper"){
            playRoundResultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            checkScore(false);
        }else{
            playRoundResultText.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            checkScore(true);
        }
    }else if(humanChoice == "Paper"){
        if(computerChoice == "Scissors"){
            playRoundResultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            checkScore(false);
        }else{
            playRoundResultText.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            checkScore(true);
        }
    } else if(humanChoice == "Scissors"){
        if(computerChoice == "Rock"){
            playRoundResultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            checkScore(false);
        }else{
            playRoundResultText.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            checkScore(true);
        }
    }
}

/**
 * 
 * @param {Boolean} result 
 */
function checkScore(result){

    let humanScoreNumber = +humanScore.textContent;
    let computerScoreNumber = +computerScore.textContent;
    result ? humanScoreNumber++ : computerScoreNumber++;
    humanScore.textContent = humanScoreNumber;
    computerScore.textContent = computerScoreNumber;
    if(humanScoreNumber == 5) {
        playRoundResultText.textContent = `You won the match! Your score is ${humanScoreNumber} and the computer's score was ${computerScoreNumber}`;
        console.log(`You won the match! Your score is ${humanScoreNumber} and the computer's score was ${computerScoreNumber}`);
        disableChoices();
    }else if(computerScoreNumber == 5) {
        playRoundResultText.textContent = `You lost the match... Your score is ${humanScoreNumber} and the computer's score was ${computerScoreNumber}`;
        console.log(`You lost the match... Your score is ${humanScoreNumber} and the computer's score was ${computerScoreNumber}`);
        disableChoices();
    }
}


function playGame(){

    humanScore.textContent = 0;
    computerScore.textContent = 0;
    playRoundResultText.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

}

playGameBtn.addEventListener("click", playGame);
rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Rock");
});
paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
});
scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
});

//playGame();