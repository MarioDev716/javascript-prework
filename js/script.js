var buttonTest, buttonScissors, bottonRock, buttonPaper;
var argButtonName;
// tu będą wymienione pozostałe zmienne guzików, np. buttonRock

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');
buttonPaper = document.getElementById('button-paper');

// tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

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
    printMessage('Twój ruch: ' + playerMove);
    playerMove = 'nieznany ruch';

    var argButtonName, buttonScissors;
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function () {
    buttonClicked('Guzik TEST');
});
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClicked('Guzik Kamień');
});
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClicked('Guzik Papier');
});
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClicked('Guzik Nożyczki');
});