document.getElementById('green').addEventListener("click", function(){changeColor(0)})
document.getElementById('yellow').addEventListener("click", function(){changeColor(1)})
document.getElementById('blue').addEventListener("click", function(){changeColor(2)})
document.getElementById('random').addEventListener("click", function(){changeColor(3)})

function changeColor(x) {
    switch (x) {
        case 0:
            window.document.body.style.background = 'lightgreen'
            break
        case 1:
            document.body.style.background = 'lightyellow'
            break
        case 2:
            document.body.style.background = 'lightblue'
            break
        default:
            document.body.style.background = changeRandom()
            break
    }
}

function changeRandom() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const rgb = `rgb(${red}, ${green}, ${blue})`
    return rgb
}