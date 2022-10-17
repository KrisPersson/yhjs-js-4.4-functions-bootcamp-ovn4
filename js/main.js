/* Gör ett sten-sax-påse spel. 
Där användaren matar in sten, sax eller påse som en sträng. 
Sedan slumpas "datorns" drag och efter det jämför med if-satser vem som vann. 
Tips! Använd Math.random() för att slumpa. Math.round(Math.random() * 2) //Slumpar ett tal mellan 0-2

Level up

Lägg till så poäng räknas för varje vinst, först till tre vinner! */

let userPick = ''
let computerPick = ''
let userScore = 0
let computerScore = 0

const possibleChoices = ['rock', 'paper', 'scissors']

const inputEl = document.querySelector('#input')
const playBtn = document.querySelector('.submit-btn')
const userPickEl = document.querySelector('#user-pick span')
const computerPickEl = document.querySelector('#computer-pick span')
const userScoreEl = document.querySelector('#user-score span')
const computerScoreEl = document.querySelector('#computer-score span')
const resultMessageEl = document.querySelector('#result-message')


playBtn.addEventListener('click', () => {
    userPick = inputEl.value
    playGame()
})

function makeComputerChoice() {
    let randomIndex = Math.floor(Math.random() * possibleChoices.length)
    return possibleChoices[randomIndex]
}

function playGame() {
    let resultMessage = 'You '
    computerPick = makeComputerChoice()

    userPickEl.textContent = userPick
    computerPickEl.textContent = computerPick
    
    if (computerPick === userPick) {
        resultMessage = "It's a draw!"
    } else if (
        (userPick === 'rock' && computerPick === 'scissors') ||
        (userPick === 'paper' && computerPick === 'rock') ||
        (userPick === 'scissors' && computerPick === 'paper')
        ) {
            resultMessage += 'win!'
            userScore += 1
        } else {
            resultMessage += 'lose!'
            computerScore += 1
        }

    resultMessageEl.textContent = resultMessage
    
    userScoreEl.textContent = userScore
    computerScoreEl.textContent = computerScore
}
