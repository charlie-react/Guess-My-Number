'use strict';

let randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textcontent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textcontent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  // User input no number
  if (!guessedNumber) {
    document.querySelector('.message').textContent = '🔴 No Number';
  }
  // User input correct number
  else if (guessedNumber === randomSecretNumber) {
    document.querySelector('.number').textContent = randomSecretNumber;
    //
    displayMessage('You are correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // User input larger number
  else if (guessedNumber !== randomSecretNumber) {
    if (score > 1) {
      displayMessage(guessedNumber>randomSecretNumber?'Too High':'Too low');
      score--;
      // meaning score =score-1
      displayScore(score);
    } else {
      displayScore(0);
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
  // User input lesser number
  // else if (guessedNumber < randomSecretNumber) {
  //   if (score > 1) {

  //     displayMessage('Too Low')
  //     score--;
  //     displayScore(score)
  //   } else {
  //    displayScore(0)
  //     displayMessage('You Lost The Game')
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  randomSecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Starting Guessing');
});
