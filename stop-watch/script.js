const timePlaceholder = document.getElementById('time-placeholder')
const minutesInput = document.getElementById('minutes')
const secondsInput = document.getElementById('seconds')
let secondsElapsed = 0
let interval = null

function formatTimer(value) {
    return String(value).padStart(2, '0')
}

function timer() {
    secondsElapsed++
    updateTime()
}

function updateTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    if (minutes > 59) {
        resetTimer()
    } else {
        const seconds = secondsElapsed % 60
        if (seconds == 59 && minutes == 59) {
            stopTimer()
        }
        timePlaceholder.innerHTML = `${formatTimer(minutes)}:${formatTimer(seconds)}`
    }
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