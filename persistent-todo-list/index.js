let itemsList = []
const itemsPlaceholder = document.getElementById('itemsPlaceholder')
const textField = document.getElementById('textField')
const listKey = 'itemsList'

function renderItems() {
    itemsPlaceholder.innerHTML = ''
    for (const [idx, item] of Object.entries(itemsList)) {
        const text = document.createElement('p')
        text.style.display = 'inline'
        text.textContent = item

        const button = document.createElement('button')
        button.textContent = 'Delete'
        button.onclick = () => removeItem(idx)
        button.style.marginLeft = '10px'

        const container = document.createElement('div')
        container.style.marginBottom = '10px'
        container.appendChild(text)
        container.appendChild(button)

        itemsPlaceholder.appendChild(container)
    }
}

function addItem() {
    if (textField.value.length == 0) {
        alert("You can't add empty items to the list")
    } else {
        itemsList.push(textField.value)
        renderItems()
        textField.value = ''
        saveItems()
    }
}

function removeItem(idx) {
    itemsList.splice(idx, 1)
    renderItems()
    saveItems()
}

function saveItems() {
    const stringList = JSON.stringify(itemsList)
    localStorage.setItem(listKey, stringList)
}

function loadItems() {
    const oldItems = localStorage.getItem(listKey)
    if (oldItems) itemsList = JSON.parse(oldItems)
    renderItems()
}

document.addEventListener("DOMContentLoaded", loadItems)