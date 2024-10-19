const timePlaceholder = document.getElementById('time-placeholder')
const minutesInput = document.getElementById('minutes')
const secondsInput = document.getElementById('seconds')
let secondsElapsed = 0
let interval = null

function formatTimer(value) {
    return String(value).padStart(2, '0')
}

function timer() {
    if (secondsElapsed === 86400) {
        secondsElapsed = 0
    }
    secondsElapsed++
    updateTime()
}

function updateTime() {
    const minutes = Math.floor(secondsElapsed / 60) % 60
    const seconds = secondsElapsed % 60
    const hours = Math.floor(secondsElapsed / 3600) % 24

    timePlaceholder.innerHTML = `${formatTimer(hours)}:${formatTimer(minutes)}:${formatTimer(seconds)}`
}

function startTimer() {
    if (interval) stopTimer()
    interval = setInterval(timer, 1000)
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {
    stopTimer()
    secondsElapsed = 0
    updateTime()
}

function customTimer() {
    if (minutesInput.value.length == 0 || secondsInput.value.length == 0) {
        alert('Invalid value in at least one of the fields')
    } else {
        let customMinutes = Number(minutesInput.value)
        if (customMinutes > 60) {
            customMinutes = 60
        }
        let customSeconds = Number(secondsInput.value)
        if (customSeconds > 60) {
            customSeconds = 60
        }
        secondsElapsed = customMinutes * 60 + customSeconds
        updateTime()
    }
}