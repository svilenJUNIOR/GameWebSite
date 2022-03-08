const buttons = document.querySelectorAll("Button");

const playerChoice = document.getElementById("PlayerChoice");
const computerChoice = document.getElementById("PcChoice");
const result = document.getElementById("Result");

buttons.forEach(button => button.addEventListener("click", (e) => {
    PlayerChoice(e.target.id)
    ComputerChoice()
    GetResult()
}))

function GetResult(){
    if (playerChoice.innerHTML == computerChoice.innerHTML) result.innerHTML = "Draw"

    if (playerChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Paper") result.innerHTML = "You loose"
    if (playerChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Scissors") result.innerHTML = "You loose"
    if (playerChoice.innerHTML == "Scissors" && computerChoice.innerHTML == "Rock") result.innerHTML = "You loose"

    if (playerChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Rock") result.innerHTML = "You win"
    if (playerChoice.innerHTML == "Scissors" && computerChoice.innerHTML == "Paper") result.innerHTML = "You win"
    if (playerChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Scissors") result.innerHTML = "You win"
}

function PlayerChoice(move){
    playerChoice.innerHTML = move
}

function ComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1

    if (choice == 1) computerChoice.innerHTML = "Rock"
    if (choice == 2) computerChoice.innerHTML = "Paper"
    if (choice == 3) computerChoice.innerHTML = "Scissors"
}