const imgOne = document.querySelector(".img1");
const imgTwo = document.querySelector(".img2");
const messageTxt = document.querySelector(".message");
const firstScore = document.querySelector(".player-1-score");
const secondScore = document.querySelector(".player-2-score");
let diceNumbs1
let diceNumbs2
let playerOneScore = 0
let playerTwoScore = 0

function startGame() {
    getNumberFor1()
    getNumberFor2()
    message()
}

function getNumberFor1() {
    diceNumbs1 = Math.floor(Math.random() * 6) + 1
    if (diceNumbs1 === 1) {
        imgOne.setAttribute("src", "./images/dice1.png")
    }
    else if (diceNumbs1 === 2) {
        imgOne.setAttribute("src", "./images/dice2.png")
    }
    else if (diceNumbs1 === 3) {
        imgOne.setAttribute("src", "./images/dice3.png")
    }
    else if (diceNumbs1 === 4) {
        imgOne.setAttribute("src", "./images/dice4.png")
    }
    else if (diceNumbs1 === 5) {
        imgOne.setAttribute("src", "./images/dice5.png")
    }
    else if (diceNumbs1 === 6) {
        imgOne.setAttribute("src", "./images/dice6.png")
    }
}

function getNumberFor2() {
    diceNumbs2 = Math.floor(Math.random() * 6) + 1
    if (diceNumbs2 === 1) {
        imgTwo.setAttribute("src", "./images/dice1.png")
    }
    else if (diceNumbs2 === 2) {
        imgTwo.setAttribute("src", "./images/dice2.png")
    }
    else if (diceNumbs2 === 3) {
        imgTwo.setAttribute("src", "./images/dice3.png")
    }
    else if (diceNumbs2 === 4) {
        imgTwo.setAttribute("src", "./images/dice4.png")
    }
    else if (diceNumbs2 === 5) {
        imgTwo.setAttribute("src", "./images/dice5.png")
    }
    else if (diceNumbs2 === 6) {
        imgTwo.setAttribute("src", "./images/dice6.png")
    }
}


function message() {
    if (diceNumbs1 > diceNumbs2) {
        playerOneScore++
        messageTxt.textContent = "Player 1 Won💥"
        firstScore.textContent = "Player 1 score: " + playerOneScore
    }
    else if (diceNumbs2 > diceNumbs1) {
        playerTwoScore++
        messageTxt.textContent = "Player 2 Won💥"
        secondScore.textContent = "Player 2 score: " + playerTwoScore
    } else {
        messageTxt.textContent = "It is a draw🔘"
    }
}