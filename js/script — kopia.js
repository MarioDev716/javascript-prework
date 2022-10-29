var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
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

// Buttons function
 
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
  }
  buttonScissors = document.getElementById('button-test');
  buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
  buttonScissors = document.getElementById('button-rock');
  buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik Kamień'); });
  buttonScissors = document.getElementById('button-paper');
  buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik Papier'); });
  buttonScissors = document.getElementById('button-scissors');
  buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik Nożyczki'); });