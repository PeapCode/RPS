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
let playerWinCount = 0
let computerWinCount = 0

function play(playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (playerChoice === computerChoice) {
        return "Tie"
    } else if (playerChoice == 'rock' && computerChoice == 'scissor'){
        return playerWinCount++
        // return "You win! Rock beats Scissors"
    } else if (playerChoice == 'paper' && computerChoice == 'rock'){
        return playerWinCount++
        // return "You win! Paper beats Rock"
    }  else if (playerChoice == 'scissor' && computerChoice == 'paper'){
        return playerWinCount++
        // return "You win! Scissors beats Paper"
    } else {
        return computerWinCount++ 
        // return "You lose, better luck next time"
    }
}


// this was just to test the logic and make sure it was working
// document.getElementById('play').onclick = function(){
//     console.log(play('paper', 'scissor'))
// }



document.getElementById('rock').onclick = function(){
    let player = 'rock'
    let computer = computerPlay()
    console.log(player)
    console.log(computer)
    console.log(play(player,computer))
    let userScore = document.getElementById('userScore')
    userScore.innerHTML = playerWinCount
    let computerScore = document.getElementById('computerScore')
    computerScore.innerHTML = computerWinCount
}

document.getElementById('paper').onclick = function(){
    let player = 'paper'
    let computer = computerPlay()
    console.log(player)
    console.log(computer)
    console.log(play(player,'rock'))
    let userScore = document.getElementById('userScore')
    userScore.innerHTML = playerWinCount
    let computerScore = document.getElementById('computerScore')
    computerScore.innerHTML = computerWinCount
}

document.getElementById('scissors').onclick = function(){
    let player = 'scissor'
    let computer = computerPlay()
    console.log(player)
    console.log(computer)
    console.log(play(player,'paper'))
    let userScore = document.getElementById('userScore')
    userScore.innerHTML = playerWinCount
    let computerScore = document.getElementById('computerScore')
    computerScore.innerHTML = computerWinCount
}







// console.log(play(playerSelection, computerSelection));
// function game(){
//     for (let i = 5; i > 3;) {
//         let player = prompt("Choose: rock, paper, or scissor")
//         let computerSelection = computerPlay();
//         console.log(play(player, computerSelection))
//         if (playerWinCount == 3) {
//             i =- 3
//             return "You won! You beat the computer, Great job"
//         }
//         if (computerWinCount == 3) {
//             i =- 3
//             return "You lost! The computer was better than you today."
//         }
//         console.log(playerWinCount)
//         console.log(computerWinCount)
        
        
        
//     }
// }









