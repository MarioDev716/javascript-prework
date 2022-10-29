// Deklaracja zmiennych

var argButtonName, msg;
var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

// Funkcja wyświetlająca komunikat odpowiedzi

function printMessage(msg) {
    var div = document.createElement('div');
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
    console.log('Przycisk "' + argButtonName + '" został kliknięty');
    // printMessage('Wciśnięto przycisk ' + argButtonName);
    console.log('buttonClicked - argButtonName: ' + argButtonName);
    console.log('buttonClicked - argComputerMove: ' + argComputerMove);
    console.log('buttonClicked - computerMove: ' + computerMove);
    displayResult(argButtonName, argComputerMove);
    playerInput == argButtonName;
    var playerInput, playerMove;
    // playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    playerMove = argButtonName;
    console.log('Wpisana odpowiedź to: ' + playerInput);
    if (playerInput == '1') {
        playerMove = 'kamień';
    } else if (playerInput == '2') {
        playerMove = 'nożyce';
    } else if (playerInput == '3') {
        playerMove = 'papier';
    } else {
        playerMove = 'Nieznany ruch';
    }
    // printMessage('Twój ruch: ' + playerMove);
    playerMove = 'nieznany ruch';

    // playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('wybór ruchu gracza to: ' + playerInput);
    playerMove = getMoveName(playerInput);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

// Losowanie wyniku

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz');
    } else if (false) {} else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    playerInput == argPlayerMove;
    console.log('DisplayResult: Wybrór gracza ' + argPlayerMove);

}