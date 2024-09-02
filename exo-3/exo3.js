// you can write js here
console.log('exo-3');

let playerInput = prompt("Votre choix ? ( papier, cailloux, ciseaux) ?");
let msgPlayerWin = "Vous avez gagné";
let msgPlayerLoose = "Vous avez perdu";
let msgPlayerEgality = "Égalité";

function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase();

    if (playerInput === "cailloux" || playerInput === "papier" || playerInput === "ciseaux" || playerInput === "bomb" ) {
        return playerInput;
    }

    console.log("Votre choix n'existe pas");

    return null;
}

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    // console.log("Res Random : " + computer);
    let randomChoice = ["cailloux", "papier", "ciseaux"];

    return randomChoice[computer];
}

function findWinner(playerInput, randomChoice) {
    if (playerInput === null) {
        return;
    }

    if (randomChoice === "papier") {
        if(playerInput === "papier") {
            return msgPlayerEgality;
        }else if (playerInput === "cailloux") {
            return msgPlayerWin;
        }else if (playerInput === "ciseaux") {
            return msgPlayerWin;
        }else if (playerInput === "bomb") {
            return msgPlayerWin;
        }
    }

    if (randomChoice === "cailloux") {
        if(playerInput === "papier") {
            return msgPlayerWin;
        }else if (playerInput === "ciseaux") {
            return msgPlayerLoose;
        }else if (playerInput === "cailloux") {
            return msgPlayerEgality;
        }else if (playerInput === "bomb") {
            return msgPlayerWin;
        }
    }

    if (randomChoice === "ciseaux") {
        if(playerInput === "papier") {
            return msgPlayerWin;
        }else if (playerInput === "cailloux") {
            return msgPlayerLoose;
        }else if (playerInput === "ciseaux") {
            return msgPlayerWin;
        }else if (playerInput === "bomb") {
            return msgPlayerWin;
        }
    }
}

function playGame(playerInput) {
    let uChoice = getPlayerChoice(playerInput);
    if (uChoice === null) {
        return;
    }
    let computerChoice = getComputerChoice();

    console.log("Votre choix :", uChoice);
    console.log("Choix de l'ordinateur :", computerChoice);

    let result = findWinner(uChoice, computerChoice);

    console.log("Résultat :", result);
}

playGame(playerInput);