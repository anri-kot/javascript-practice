const images = ["https://project-imas.wiki/images/thumb/3/3b/SC_P_Asakura_Toru_SSR07%2B.jpg/800px-SC_P_Asakura_Toru_SSR07%2B.jpg", "https://project-imas.wiki/images/thumb/b/bf/SC_P_Asakura_Toru_SSR07.jpg/800px-SC_P_Asakura_Toru_SSR07.jpg",
    "https://project-imas.wiki/images/thumb/0/08/SC_P_Asakura_Toru_SSR06%2B.jpg/800px-SC_P_Asakura_Toru_SSR06%2B.jpg", "https://project-imas.wiki/images/thumb/6/60/SC_P_Asakura_Toru_SSR06.jpg/800px-SC_P_Asakura_Toru_SSR06.jpg",
    "https://project-imas.wiki/images/thumb/a/a3/SC_P_Asakura_Toru_SSR05%2B.jpg/800px-SC_P_Asakura_Toru_SSR05%2B.jpg", "https://project-imas.wiki/images/thumb/9/9c/SC_P_Asakura_Toru_SSR05.jpg/800px-SC_P_Asakura_Toru_SSR05.jpg",
    "https://project-imas.wiki/images/thumb/0/06/SC_P_Asakura_Toru_SSR04%2B.jpg/800px-SC_P_Asakura_Toru_SSR04%2B.jpg", "https://project-imas.wiki/images/thumb/2/27/SC_P_Asakura_Toru_SSR04.jpg/800px-SC_P_Asakura_Toru_SSR04.jpg",
    "https://project-imas.wiki/images/thumb/3/34/SC_P_Asakura_Toru_SSR03%2B.jpg/800px-SC_P_Asakura_Toru_SSR03%2B.jpg", "https://project-imas.wiki/images/thumb/4/4d/SC_P_Asakura_Toru_SSR03.jpg/800px-SC_P_Asakura_Toru_SSR03.jpg"]
let imageElement = document.getElementById('image')
const usedIndexes = new Set()

function generateImage() {
    if (usedIndexes.size === images.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIndex = Math.floor(Math.random() * images.length) // number > 0 $ < 1 -- number * length -- round down so it doesnt go above the array length
        
        if (usedIndexes.has(randomIndex)) continue

        console.log(randomIndex)
        imageElement.src = images[randomIndex]
        usedIndexes.add(randomIndex)
        break
    }
}