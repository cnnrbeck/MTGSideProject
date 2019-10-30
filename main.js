async function getMTGData() {
    const response = await fetch('https://api.magicthegathering.io/v1/cards')
    const myJson = await response.json()
    console.log(JSON.stringify(myJson))
}

getMTGData()