function showIsPrimeNumber() {
  let num = inputNumber.value;
  let isPrime = true;

  if (num <= 1) {
    resultPrimeNumber.innerText = num + ' is not a prime number.';
  }

  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && num != i && i != 1) {
      isPrime = false;
      console.log('Dentro del else: ' + i + ' ¿ Es primo? : ' + isPrime);
      break;
    } else {
      isPrime = true;
    }
  }

  console.log(isPrime);
  isPrime
    ? (resultPrimeNumber.innerText = num + ' is a prime number')
    : (resultPrimeNumber.innerText = num + ' is not prime number');
}
