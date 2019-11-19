async function getMTGData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.next_page)
        // if(data.has_more === true)
        // {
        //     getMTGData(data.next_page)
        // }
        return data
    }
    catch(error) {
        console.error(error)
    }
}


let theData = getMTGData('https://api.scryfall.com/cards/page1')
.then(card_data => {
    let cardArr = card_data.data
    for(const card of cardArr)
    {
        if(card.type_line.includes("Legendary Creature")) {    
            console.log(card)
            populateDom(card)           
        }
    }
})

console.log(theData)

let mainArea = document.querySelector('main')

function populateDom(card_data)
{
    console.log(card_data)
    let cardDiv = document.createElement('div')
    let textDiv = document.createElement('div')
    let name = document.createElement('h1')
    let manaCost = document.createElement('h3')
    let pic = document.createElement('img')

    cardDiv.setAttribute('class', 'cardDivs')
    textDiv.setAttribute('class', 'textDivs')

    name.textContent = card_data.name
    manaCost.textContent = card_data.mana_cost
    setImage(pic, card_data)

    cardDiv.appendChild(pic)
    textDiv.appendChild(name)
    textDiv.appendChild(manaCost)
    
    cardDiv.appendChild(textDiv)

    mainArea.appendChild(cardDiv)
}

function setImage (img, data)
{
    if(data.hasOwnProperty('image_uris')) {
        img.src = data.image_uris.normal
    }
    else {
        img.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }
   
}

