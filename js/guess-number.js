let counterGuessingNumber = 0;
let maxGuessNumber = 10;
let minGuessNumber = 1;
function guessNumber() {
  let numUser = parseInt(document.getElementById('inputGuessNumber').value);

  //  returns a random number between min and max (both included):
  let numComp =
    Math.floor(Math.random() * (maxGuessNumber - minGuessNumber + 1)) +
    minGuessNumber;
  let result = document.getElementById('resultGuessNumber');

  if (numUser >= minGuessNumber && numUser <= maxGuessNumber) {
    if (numUser === numComp) {
      counterGuessingNumber += 1;
      result.innerText =
        "YOU GUESSED IT! It's: " +
        numComp +
        '\nYou guessed in total: ' +
        counterGuessingNumber;
    } else {
      result.innerText =
        'Sorry. It was: ' +
        numComp +
        ' Try again!' +
        '\nYou guessed in total: ' +
        counterGuessingNumber;
    }
  } else {
    result.innerHTML = 'Please, choose a valid integer number between 1 and 10';
  }
}
