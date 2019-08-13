$(document).ready(function() {
  //declares variables for game
  const colors = ["red", "green", "blue"];
  let wins = 0;
  let maxGuesses = 10;
  let wordProgress = [];
  let color;
  let randIndex = 0;
  let solved;
  let wrongGuesses = [];
  let guess;
  let correct = false;
  //   let character;

  randIndex = Math.floor(Math.random() * colors.length);
  color = colors[randIndex];
  //div for wins = 0
  //div for maxGuesses = 10
  //div for wordProgress

  function mystery(word) {
    for (let letter = 0; letter < word.length; letter++) {
      wordProgress.push("_ ");
    }
    return wordProgress;
  }

  mystery(color);

  $(document).keyup(function() {
    guess = event.key;
    console.log(guess);

    for (let character = 0; character < color.length; character++) {
      if (guess === color[character]) {
        wordProgress[character] = guess;
        console.log(guess);
        console.log(wordProgress);
        correct = true;
      }
    }

    if (correct === false) {
      maxGuesses--;
    } else {
      correct = false;
    }

    if (!wordProgress.includes("_ ") && maxGuesses > 0) {
      wins++;
      wordProgress = [];
      maxGuesses = 10;
    } else if (wordProgress.includes("_ ") && maxGuesses === 0) {
      alert("You lose! Try again :(");
      wordProgress = [];
      maxGuesses = 10;
    }

    console.log(maxGuesses);
  });
});
