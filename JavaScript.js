const startBtn = document.getElementById("start-btn")

let playerWins = true;
let draw = false

let choiceCpu = 0;
let choicePlayer = 0;

let amountRounds = 0;

//rundenanzahl übergabe/festlegung

const roundWinEl = document.getElementById("roundWin-el")
const winCountEl = document.getElementById("winCount-el")
const totalWinEl = document.getElementById("totalWin-el")
const versusEl = document.getElementById("versus-el")

let playerWinCount = 0
let computerWinCount = 0

const weaponsArray = ["Rock", "Paper", "Scissors"];

function confirmRounds() {  // anzahl zu spielender runden vom imputfeld nehmen
    amountRounds = document.getElementById("rounds-inp").value;
    console.log(amountRounds)
    reset();
    resetText()
    startBtn.disabled = true
}

function cpuweapon() {
    choiceCpu = Math.floor(Math.random() * 3);  //computer makes random
}

function chosenWeapon(playerChoice) {  //battle
    draw = false;
    cpuweapon();
    console.log(choiceCpu)
    comparison(playerChoice, choiceCpu)
    console.log(playerWins)
    console.log(draw)

    versusEl.innerText = weaponsArray[choicePlayer] + " vs " + weaponsArray[choiceCpu]

    if (draw === true) {
        console.log("unentschieden")
        roundWinEl.innerText = "Diese Runde ging unentschieden aus"
    } else if (playerWins === true) {
        console.log("spieler hat gewonnen")
        roundWinEl.innerText = "Diese Runde hast du gewonnen"
        playerWinCount += 1;
    } else {
        console.log("computer hat gewonnen")
        roundWinEl.innerText = "Diese Runde hat der computer gewonnen"
        computerWinCount += 1;
        quark();
    }
    amountRounds--;
    winCountEl.innerText = playerWinCount + ":" + computerWinCount;  //punktestand


    if (amountRounds === 0) { // gewinnerbekanntgabe

        if (playerWinCount > computerWinCount) {
            totalWinEl.innerText = "Spielende! Spieler gewinnt"
        } else if (playerWinCount < computerWinCount) {
            totalWinEl.innerText = "Spielende! Computer gewinnt"
        } else {
            totalWinEl.innerText = "Spielende! Unentschieden"
        }

        reset(); //call reset function
    }
}

function reset() { // enables start button
    playerWinCount = 0
    computerWinCount = 0
    startBtn.disabled = false
}

function resetText() {
    totalWinEl.innerText = ""
    roundWinEl.innerText = ""
    versusEl.innerText = ""
    winCountEl.innerText = "0:0"
}
// const weaponsArray = ["Rock", "Paper", "Scissors"];

function comparison(choicePlayer, choiceCpu) {  // game logic / rules
    if (choicePlayer === 0 && choiceCpu === 0 || choicePlayer === 1 && choiceCpu === 1 || choicePlayer === 2 && choiceCpu === 2) {
        draw = true;
        return draw;
    } else if (choicePlayer === 0 && choiceCpu === 1) { // rock - paper
        playerWins = false
        console.log("rock - paper")
    } else if (choicePlayer === 0 && choiceCpu === 2) { // rock - scissors
        playerWins = true
        console.log("rock - scissors")
    } else if (choicePlayer === 1 && choiceCpu === 0) { // paper - rock
        playerWins = true
        console.log("paper - rock")
    } else if (choicePlayer === 1 && choiceCpu === 2) { // paper - scissors
        playerWins = false
        console.log("paper - scissors")
    } else if (choicePlayer === 2 && choiceCpu === 0) { // scissors - rock
        playerWins = false
        console.log("scissors - rock")
    } else if (choicePlayer === 2 && choiceCpu === 1) { // scissors - paper
        playerWins = true
        console.log("scissors - paper")
    }
    return playerWins;
}

function quark() {
    const audio = document.getElementById("audio")
    audio.play()
}