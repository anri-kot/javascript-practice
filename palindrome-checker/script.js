function checkPalindrome() {
    let word = document.getElementById('word').value

    let wordLength = word.length
    let wordLeft = []
    let wordRight = []
    
    if (wordLength == 0 || !wordLength >= 3) {
        alert('Please insert a valid word.')
    } else {
        if (word.length % 2 == 0) {
            for (let i = 0; i < word.length; i++) {
                if (i < word.length / 2) {
                    wordLeft.push(word[i])
                } else {
                    wordRight.unshift(word[i])
                }
            }
        } else {
            for (let i = 0; i < word.length; i++) {
                if (i !== Math.floor(wordLength / 2)) {
                    if (i < word.length / 2) {
                        wordLeft.push(word[i])
                    } else {
                        wordRight.unshift(word[i])
                    }
                }
            }
        }
        wordLeft = wordLeft.toString()
        wordRight = wordRight.toString()
        if (wordLeft.toLowerCase() == wordRight.toLowerCase()) {
            alert(`The word ${word} is a palindrome.`)
        } else {
            alert(`The word ${word} is not a palindrome.`)
        }
    }
}