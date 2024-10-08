let userDisplay = document.getElementById('user-choice')
let cpuDisplay = document.getElementById('cpu-choice')
let resultDisplay = document.getElementById('result')
const rps = ['ROCK', 'PAPER', 'SCISSORS']

function computeChoice(x) {
    let cpuChoice = Math.floor(Math.random() * 3)
    let result
    if (x === cpuChoice) {
        result = 'DRAW'
    } else if (x === 0) {
        if (cpuChoice === 1) {
            result = 'YOU LOSE'
        } else {
            result = 'YOU WIN'
        }
    } else if (x === 1) {
        if (cpuChoice === 2) {
            result = 'YOU LOSE'
        } else {
            result = 'YOU WIN'
        }
    } else {
        if (cpuChoice === 1) {
            result = 'YOU LOSE'
        } else {
            result = 'YOU WIN'
        }
    }
    fillDisplays(x, cpuChoice, result)
}

function fillDisplays(user, cpu, res) {
    userDisplay.innerHTML = rps[user]
    cpuDisplay.innerHTML = rps[cpu]
    resultDisplay.innerHTML = res
}