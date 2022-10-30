
// Funkcja akcji przycisków.

function buttonClick(argButtonName) {
    // console.log(argButtonName + ' został naciśnięty.');
}

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClick('Przycisk - Kamień');
    buttonClicked('kamień');
    // clearMessages();
    // printMessage('Wciśnięto przycisk - Kamień');
});

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClick('Przycisk - Papier');
    buttonClicked('papier');
});

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClick('Przycisk - Nożyczki');
    buttonClicked('nożyce');
});

