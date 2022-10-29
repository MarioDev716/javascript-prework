//Deklaracja zmiennych

let buttonRock;

// Funkcja akcji przycisków.

function buttonClick(argButtonName) {
    // console.log(argButtonName + ' został naciśnięty.');
}

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClick('Przycisk - Kamień');
    buttonClicked('kamień');
    // clearMessages();
    // printMessage('Wciśnięto przycisk - Kamień');
});

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClick('Przycisk - Papier');
    buttonClicked('papier');
});

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClick('Przycisk - Nożyczki');
    buttonClicked('nożyce');
});

