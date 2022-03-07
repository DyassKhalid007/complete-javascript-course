'use strict';

const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
let currentPlayer = 1; // 0 = playerOne, 2 = playerTwo
let winScore = 20;

const playerOne = {
  currentScore: document.getElementById('current--0'),
  overAllScore: document.getElementById('score--0'),
  activePlayer: document.querySelector('.player--0'),
};

const playerTwo = {
  currentScore: document.getElementById('current--1'),
  overAllScore: document.getElementById('score--1'),
  activePlayer: document.querySelector('.player--1'),
};

const players = [0, playerOne, playerTwo];

function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}

function changeDice() {
  let number = rollDice();
  diceImg.src = `Dice-${number}.png`;
  return number;
}
function resetGame() {
  playerOne.currentScore.textContent = 0;
  playerTwo.currentScore.textContent = 0;
  playerOne.overAllScore.textContent = 0;
  playerTwo.overAllScore.textContent = 0;
  currentPlayer = 1;
  playerOne.activePlayer.classList.add('player--active');
  playerTwo.activePlayer.classList.remove('player--active');
}

function changeActivePlayer() {
  if (currentPlayer === 1) {
    playerOne.activePlayer.classList.add('player--active');
    playerTwo.activePlayer.classList.remove('player--active');
  } else {
    playerTwo.activePlayer.classList.add('player--active');
    playerOne.activePlayer.classList.remove('player--active');
  }
}

function checkDice(number) {
  return number === 1 ? true : false;
}
function setCurrentScore(player, number) {
  let currentScore = Number(player.currentScore.textContent);
  currentScore += number;
  player.currentScore.textContent = currentScore;
}

function setOverallScore(player) {
  let total = Number(player.overAllScore.textContent);
  total += Number(player.currentScore.textContent);
  player.overAllScore.textContent = total;
  player.currentScore.textContent = 0;
}

function shouldGameContinue() {
  if (
    Number(playerOne.overAllScore.textContent) >= winScore ||
    Number(playerOne.currentScore.textContent) >= winScore ||
    Number(playerTwo.overAllScore.textContent) >= winScore ||
    Number(playerTwo.currentScore.textContent) >= winScore
  ) {
    alert(`Player ${currentPlayer} won the game`);
    return false;
  } else {
    return true;
  }
}

resetGame();

rollDiceBtn.addEventListener('click', function () {
  if (shouldGameContinue()) {
    let dice = changeDice();
    if (checkDice(dice)) {
      players[currentPlayer].currentScore.textContent = 0;
      players[currentPlayer].overAllScore.textContent = 0;
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      changeActivePlayer();
    } else {
      setCurrentScore(players[currentPlayer], dice);
    }
  }
  shouldGameContinue();
});

newGameBtn.addEventListener('click', resetGame);
holdScoreBtn.addEventListener('click', function () {
  if (shouldGameContinue()) {
    setOverallScore(players[currentPlayer]);
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    changeActivePlayer();
  }
});
