// Deklaracja zmiennych
let argWi = 0,
    argDr = 0,
    argDe = 0;
let win, draft, defeat;

// Funkcja wyświetlająca komunikat odpowiedzi

function printMessage(msg) {
    let div = document.createElement('div');
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
    // console.log('Przycisk "' + argButtonName + '" został kliknięty');
    randomizer();
    // console.log('buttonClicked - argButtonName: ' + argButtonName);
    // console.log('buttonClicked - argComputerMove: ' + argComputerMove);
    displayResult(argButtonName, argComputerMove);
    // scoreUpdate('test');
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
        argWi++; 
        // argWi = win;
        console.log('displayResult1 - argWi: ' + argWi);
        // console.log('displayResult - win: ' + win);
        scoreUpdate('win', argWi);

    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
        // console.log('Wygrywasz');
        argWi++;
        // argWi = win;
        console.log('displayResult2 - argWi: ' + argWi);
        // console.log('displayResult - win: ' + win);
        scoreUpdate('win', argWi);
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        // console.log('Wygrywasz');
        argWi++;
        // argWi = win;
        console.log('displayResult3 - argWi: ' + argWi);
        // console.log('displayResult - win: ' + win);
        scoreUpdate('win', argWi);
    } else if (false) {} else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
        // console.log('Remis');
        argDr++;
        console.log('displayResult - argDr: ' + argDr);
        scoreUpdate('draw', argDr);
    } else {
        printMessage('Przegrywasz');
        // console.log('Przegrywasz');
        argDe++;
        console.log('displayResult - argDe: ' + argDe);
        scoreUpdate('defeat', argDe);
    }
    // clearMessages();
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    // console.log('DisplayResult: Wybrór gracza ' + argPlayerMove);

}

function randomizer() {
    let randomNumber;
    console.log('randomizer - uruchomiony!');
    randomNumber = Math.floor(Math.random() * 3 + 1);
    // console.log('randomizer - wylosowana liczba to: ' + randomNumber);
    // console.log('randomizer - nazwa wylosowanej liczby: ' + getMoveName(randomNumber));
    argComputerMove = getMoveName(randomNumber);
    // console.log('randomizer - argComputerMove: ' + argComputerMove);
}

function scoreUpdate(argElement, argUpdate) {
    console.log('scoreUpdate - uruchomiony!');
    // console.log('scoreUpdate - win: ' + win);
    // console.log('scoreUpdate - argUpdate: ' + argUpdate);
    let divWin = document.getElementById(argElement);
    divWin.textContent = argUpdate;
}