'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No Number! 🚫';
  } else if (guessNumber === number) {
    document.querySelector('.message').textContent = 'Correct Number! ��';

  } else if (guessNumber > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High! ���️';
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      document.querySelector('.message').textContent = 'Game Over! ���️ You lost all your score!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low! ���️';
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      document.querySelector('.message').textContent = 'Game Over! ���️ You lost all your score!';
      document.querySelector('.score').textContent = 0;
    }
  }
})
