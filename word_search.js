//declares variables for game
const colors = ["red", "green", "blue"];
let wins = 0;
let maxGuesses = 10;
let wordProgress = [];
let color;
let randIndex = 0;
let solved;

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
