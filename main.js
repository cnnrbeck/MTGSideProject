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
    for(const card of cardArr)
    {
        populateDom(card)
    }
})

console.log(theData)

let mainArea = document.querySelector('main')

function populateDom(card_data)
{
    let cardDiv = document.createElement('div')
    let name = document.createElement('h1')
    let manaCost = document.createElement('h3')
    let pic = document.createElement('img')

    cardDiv.setAttribute('class', 'cardDivs')

    name.textContent = card_data.name
    manaCost.textContent = card_data.manaCost
    setImage(pic, card_data)

    cardDiv.appendChild(pic)
    cardDiv.appendChild(name)
    cardDiv.appendChild(manaCost)
    
    mainArea.appendChild(cardDiv)

}

function setImage (img, data)
{
    img.src = data.imageUrl
    img.onerror = function() { img.src="https://starwars-visualguide.com/assets/img/placeholder.jpg" }
}

