/* Declaration of variables */

let win = 0;
let draw = 0;
let defeat = 0;

/* Funkcja wyświetlająca komunikat odpowiedzi */

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
    const randomNumber = randomizer();
    console.log('buttonClicked - ' + argButtonName);
    const argComputerMove = getMoveName(randomNumber);
    // console.log('buttonClicked - argComputerMove: ' + argComputerMove);
    console.log('buttonClicked - computers move: ' + argComputerMove);
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

function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień' || argPlayerMove == 'kamień' && argComputerMove == 'nożyce' || argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        // console.log('Wygrywasz');
        win++;
        console.log('displayResult1 - win: ' + win);
        // scoreUpdate('win', win);
        const divWin = document.getElementById('win');
        divWin.textContent = win;
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
        draw++;
        console.log('displayResult - draw: ' + draw);
        // scoreUpdate('draw', draft);
        const divDraw = document.getElementById('draw');
        divDraw.textContent = draw;
    } else {
        printMessage('Przegrywasz');
        defeat++;
        console.log('displayResult - defeat: ' + defeat);
        // scoreUpdate('defeat', defeat);
        const divDefeat = document.getElementById('defeat');
        divDefeat.textContent = defeat;
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
