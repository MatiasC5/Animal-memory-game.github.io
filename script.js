const gridDisplay = document.querySelector('#grid')
const result = document.getElementById('result')




const elementsArray = [
    {
        name: 'asia',
        img: 'images/asia.jpeg'
    },
    {
        name: 'isa',
        img: 'images/isa.jpeg'
    },
    {
        name: 'kira',
        img: 'images/kira.jpeg'
    },
    {
        name: 'lola',
        img: 'images/lola.jpeg'
    },
    {
        name: 'nestor',
        img: 'images/nestor.jpeg'
    },
    {
        name: 'asia',
        img: 'images/asia.jpeg'
    },
    {
        name: 'isa',
        img: 'images/isa.jpeg'
    },
    {
        name: 'kira',
        img: 'images/kira.jpeg'
    },
    {
        name: 'lola',
        img: 'images/lola.jpeg'
    },
    {
        name: 'nestor',
        img: 'images/nestor.jpeg'
    },
    {
        name: 'asia',
        img: 'images/asia.jpeg'
    },
    {
        name: 'isa',
        img: 'images/isa.jpeg'
    },
    {
        name: 'kira',
        img: 'images/kira.jpeg'
    },
    {
        name: 'lola',
        img: 'images/lola.jpeg'
    },
    {
        name: 'nestor',
        img: 'images/nestor.jpeg'
    }
 
 
    
]
elementsArray.sort(() => 0.5 - Math.random())

let cardChosen = []
let cardChosenId = []
const cardsWon = []



function createBoard() {
    for (let i = 0; i < elementsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/download.jfif')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }

}


function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    const optionThreeId = cardChosenId[2]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/download.jfif')
        cards[optionTwoId].setAttribute('src', 'images/download.jfif')
        cards[optionThreeId].setAttribute('src', 'images/download.jfif')
    }
    else if (cardChosen[0] == cardChosen[1] && cardChosen[0] == cardChosen[2] && cardChosen[2] == cardChosen[1]) {
        cards[optionOneId].setAttribute('src', `images/${cardChosen[0]}.jpeg`)
        cards[optionTwoId].setAttribute('src', `images/${cardChosen[1]}.jpeg` )
        cards[optionThreeId].setAttribute('src', `images/${cardChosen[2]}.jpeg` )
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cards[optionThreeId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/download.jfif')
        cards[optionTwoId].setAttribute('src', 'images/download.jfif')
        cards[optionThreeId].setAttribute('src', 'images/download.jfif')
    }
   
    cardChosen = []
    cardChosenId = []
    if (cardsWon.length === elementsArray.length / 3) {
        result.textContent = 'You Found them all !!!'
    }
}




function flipCard() {
    let cardIds = this.getAttribute('data-id')
    cardChosen.push(elementsArray[cardIds].name)
    cardChosenId.push(cardIds)
    this.setAttribute('src', elementsArray[cardIds].img)
    if (cardChosen.length === 3) {
        setTimeout(checkForMatch, 500)
    }

}







createBoard()