// Deklaracja zmiennych
let argWin = 0;
let argDraft = 0;
let argDefeat = 0;

// Funkcja wyświetlająca komunikat odpowiedzi

function printMessage(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

// Funkcja losująca odpowiedź

function buttonClicked(argButtonName) {
    clearMessages();
    console.clear();
    randomizer();
    displayResult(argButtonName, argComputerMove);
}

// Zamiana wyniku losowania na zmienną tekstową

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else(argMoveId == 3)
    return 'nożyce';
}

// Losowanie wyniku

function displayResult(argPlayerMove, argComputerMove) {
    // console.log('displayResult - uruchomiony!');
    // console.log('displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        // console.log('Wygrywasz');
        argWin++;
        console.log('displayResult1 - argWin: ' + argWin);
        scoreUpdate('win', argWin);

    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
        argWin++;
        console.log('displayResult2 - argWin: ' + argWin);
        scoreUpdate('win', argWin);
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        argWin++;
        console.log('displayResult3 - argWin: ' + argWin);
        scoreUpdate('win', argWin);
    } else if (false) {} else if (argPlayerMove == argComputerMove) {
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

function randomizer() {
    const randomNumber;
    console.log('randomizer - uruchomiony!');
    randomNumber = Math.floor(Math.random() * 3 + 1);
    argComputerMove = getMoveName(randomNumber);
}

function scoreUpdate(argElement, argUpdate) {
    console.log('scoreUpdate - uruchomiony!');
    let divWin = document.getElementById(argElement);
    divWin.textContent = argUpdate;
}