function computerPlay(){
    let num = Math.floor(Math.random() * 3)
    switch(num){
        case 0:
            num = 'rock'
            break
        case 1:
            num = 'paper'
            break
        case 2:
            num = 'scissor'
            break
        }
    return num
}

function play(playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (playerChoice == computerChoice) {
        return "Tie"
    } else if (playerChoice == 'rock' && computerChoice == 'scissor'){
        playerWinCount++
        return "You win! Rock beats Scissors"
    } else if (playerChoice == 'paper' && computerChoice == 'rock'){
        playerWinCount++
        return "You win! Paper beats Rock"
    }  else if (playerChoice == 'scissor' && computerChoice == 'paper'){
        playerWinCount++
        return "You win! Scissors beats Paper"
    } else {
        computerWinCount++
        return "You lose, better luck next time"
    }
}
let playerWinCount = 0
let computerWinCount = 0 



// console.log(play(playerSelection, computerSelection));
function game(){
    for (let i = 5; i > 3;) {
        let player = prompt("Choose: rock, paper, or scissor")
        let computerSelection = computerPlay();
       console.log(play(player, computerSelection))
        if (playerWinCount == 3) {
            i =- 3
            return "You won! You beat the computer, Great job"
        }
        if (computerWinCount == 3) {
            i =- 3
            return "You lost! The computer was better than you today."
        }
        
        
    }
}
console.log(game())
console.log(playerWinCount)
console.log(computerWinCount)
