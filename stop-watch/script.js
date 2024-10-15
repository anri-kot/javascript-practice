const timePlaceholder = document.getElementById('time-placeholder')
let currentTime = 0
let interval = null

function formatTimer(value) {
    return String(value).padStart(2, '0')
}

function updateTime() {
    const minutes = Math.floor(currentTime / 60)
    const seconds = currentTime % 60
    timePlaceholder.innerHTML = `${formatTimer(minutes)}:${formatTimer(seconds)}`
}

function timer() {
    currentTime++
    updateTime()
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
    currentTime = 0
    startTimer()
    updateTime()
}