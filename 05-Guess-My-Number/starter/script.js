'use strict';

//getting the content

// document.querySelector('.message').textContent = 'Correct Number';

// console.log(document.querySelector('.message').textContent);
// //secret number
// document.querySelector('.number').textContent = 13;

// //score
// document.querySelector('.score').textContent = 10;

// //input field

// document.querySelector('.guess').value = 1000;
// console.log(document.querySelector('.guess').value);

// // highscore
// document.querySelector('.highscore').textContent = 'New HighScore';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.highscore').textContent = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered';
    //when the player wins
  } else if (guess === secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (guess !== secretNumber && score > 0) {
    score--;

    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Number is too high' : 'Number is too low';

    if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('body').style.backgroundColor = 'red';
    }
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
