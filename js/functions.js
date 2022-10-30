/* Declaration of variables */

let argWin = 0;
let argDraft = 0;
let argDefeat = 0;
let argRandom = 0;

/* [IN PROGRESS] Funkcja wyświetlająca komunikat odpowiedzi */

function printMessage(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}



function buttonClicked(argButtonName) {
    clearMessages();
    console.clear();
    argRandom = randomizer();
    // console.log('buttonClicked - ' + argRandom);
    let argComputerMove = getMoveName(argRandom);
    // console.log('buttonClicked - argComputerMove: ' + argComputerMove);
    console.log('buttonClicked - computers move: ' + argButtonName);
    displayResult(argButtonName, argComputerMove);
}

/* Change random number for text */

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else(argMoveId == 3)
    return 'nożyce';
}

/* Main method - display commentary and score on table */

function displayResult(argPlayerMove, randomNumber) {
    // console.log('displayResult - uruchomiony!');
    // console.log('displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień' || argPlayerMove == 'kamień' && argComputerMove == 'nożyce' || argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        // console.log('Wygrywasz');
        argWin++;
        console.log('displayResult1 - argWin: ' + argWin);
        scoreUpdate('win', argWin);
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
        argDraft++;
        console.log('displayResult - argDraft: ' + argDraft);
        scoreUpdate('draw', argDraft);
    } else {
        printMessage('Przegrywasz');
        argDefeat++;
        console.log('displayResult - argDefeat: ' + argDefeat);
        scoreUpdate('defeat', argDefeat);
    }
    // clearMessages();
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

/* Method randomizes computer movement */

function randomizer() {
    console.log('randomizer - uruchomiony!');
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    // console.log('randomizer - randomNumber: ' + randomNumber);
    return randomNumber;
    // argComputerMove = getMoveName(randomNumber);
}

/* [IN PROGRESS] Method for display score on main table */

function scoreUpdate(argElement, argUpdate) {
    console.log('scoreUpdate - uruchomiony!');
    const divWin = document.getElementById(argElement);
    divWin.textContent = argUpdate;
}