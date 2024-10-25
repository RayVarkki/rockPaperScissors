let options = ["Rock", "Paper", "Scissors"];

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
        console.log("This round was a draw!");
    }
    else if(humanChoice == "Rock"){
        if(computerChoice == "Paper"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return false;
        }else{
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            return true;
        }
    }else if(humanChoice == "Paper"){
        if(computerChoice == "Scissors"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return false;
        }else{
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            return true;
        }
    } else if(humanChoice == "Scissors"){
        if(computerChoice == "Rock"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return false;
        }else{
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            return true;
        }
    }
}

function playGame(){
    let computerScore = 0;
    let humanScore = 0; 
    for(let i = 0; i<5; i++){
        let result = playRound(getComputerChoice(), getHumanChoice());
        console.log(result);
        if(result !== undefined){
            result ? humanScore++ : computerScore++;
        }
    }
    if(humanScore === computerScore){
        console.log(`This match was a draw! Your score is ${humanScore} and the computer's score was ${computerScore}`);
    }else if(humanScore > computerScore) {
        console.log(`You won the match! Your score is ${humanScore} and the computer's score was ${computerScore}`);
    }else{
        console.log(`You lost the match... Your score is ${humanScore} and the computer's score was ${computerScore}`);
    }
}

//playGame();