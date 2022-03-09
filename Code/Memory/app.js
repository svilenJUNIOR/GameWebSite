const cardArray = [
    {
        "name": "blank",
        "img": "./Pictures/blank.png" 
    },
    {
        "name": "cheeseburger",
        "img": "./Pictures/cheeseburger.png" 
    },
    {
        "name": "fries",
        "img": "./Pictures/fries.png" 
    },
    {
        "name": "hotdog",
        "img": "./Pictures/hotdog.png" 
    },
    {
        "name": "ice-cream",
        "img": "./Pictures/ice-cream.png" 
    },
    {
        "name": "milkshake",
        "img": "./Pictures/milkshake.png" 
    },
    {
        "name": "pizza",
        "img": "./Pictures/pizza.png" 
    },
    {
        "name": "white",
        "img": "./Pictures/white.png" 
    }, 
    {
        "name": "blank",
        "img": "./Pictures/blank.png" 
    },
    {
        "name": "cheeseburger",
        "img": "./Pictures/cheeseburger.png" 
    },
    {
        "name": "fries",
        "img": "./Pictures/fries.png" 
    },
    {
        "name": "hotdog",
        "img": "./Pictures/hotdog.png" 
    },
    {
        "name": "ice-cream",
        "img": "./Pictures/ice-cream.png" 
    },
    {
        "name": "milkshake",
        "img": "./Pictures/milkshake.png" 
    },
    {
        "name": "pizza",
        "img": "./Pictures/pizza.png" 
    },
    {
        "name": "white",
        "img": "./Pictures/white.png" 
    },
]
let grid = document.querySelector(".grid")

function Run(){
    Shuffle()
    CreateCards()
}
Run()

function Shuffle(){
    cardArray.sort(() => 0.5 - Math.random())
}

function CreateCards(){
    for (let i = 0; i < cardArray.length; i++){
        let card = document.createElement("img")
        card.setAttribute("data-id", i)
        card.setAttribute("src", cardArray[i].img)
        grid.appendChild(card)
    }
}

