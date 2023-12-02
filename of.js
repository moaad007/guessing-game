// of.js

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('btn');
  var replayBtt = document.getElementById('replayBtt');
  var cardInner = document.querySelector('.card-inner');
  var answer = Math.floor(Math.random() * 50 + 1);
  var guess = 0;

  btn.addEventListener('click', function () {
    // Toggle the class 'flipped' to trigger the flip animation
    cardInner.classList.toggle('flipped');
    
    // Logic to check the guess
    var userGuess = parseInt(document.getElementById("num").value);
    guess += 1;

    if (userGuess === answer) {
      document.getElementById("Myguss").innerText = "You win!";
    }else if (userGuess<answer) {
      document.getElementById("Myguss").innerText = "too small. Try again!";
    }else if(userGuess>answer) {
      document.getElementById("Myguss").innerText = "too large. Try again!";
    }
  });

  replayBtt.addEventListener('click', function () {
    // Reset the card by removing the 'flipped' class
    cardInner.classList.remove('flipped');

    // Reset the game logic
    answer = Math.floor(Math.random() * 50 + 1);
    guess = 0;
    document.getElementById("Myguss").innerText = "";
    document.getElementById("num").value = "";
  });
});
