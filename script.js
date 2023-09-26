const choices = ["rock", "paper", "scissors"];
const winners = [];
function getComputerChoice(){

    
    return choices[Math.floor(Math.random() *  choices.length)]

}
function game(){
    for(let i = 1; i <= 5; i++){
        playRound();
    }
    logWins();
}


function playRound() {
   const playerSelection = playerChoice();
   const computerSelection = computerChoice();
   const winner = checkWinner(playerSelection,computerSelection);
   winners.push(winner);
}
function computerSelection(){
    return choices[Math.floor(Math.random() *  choices.length)];
}
function playerChoice(){
    let input = prompt("type rock, paper, or scissors");
    while (input == null) {
        input = prompt("type rock, paper, or scissors");
    }
    input = input.toLowerCase();
    return input;
}


function computerChoice() {
    return choices[Math.floor(Math.random() *  choices.length)];
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "tie";
    } else if (
        (choiceP === "rock" && choiceC == "scissors" ) || (choiceP === "paper" && choiceC == "rock") || (choiceP === "scissors" && choiceC == "paper")
        ){
           return "player wins"; 
        } else {
            return "computer wins";
        }
}

function logWins(){
    console.log(winners);
}

game();