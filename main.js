async function getMTGData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error)
    }
}

const theData = getMTGData('https://api.magicthegathering.io/v1/cards/')
.then(data => {
    let cardArr = data.cards;
    console.log(cardArr)
    for(const card of cardArr)
    {
        console.log(card)
    }
})

console.log(theData)


// let card = getMTGData()
// console.log(card)
// let mainArea = document.querySelector('main')

// let name = document.createElement('h1')
// let manaCost = document.createElement('h3')

// name.textContent = card.name
// manaCost.textContent = card.manaCost
// console.log(name)
// console.log(manaCost)

// mainArea.appendChild(name)
// mainArea.appendChild(manaCost)