
const output = document.getElementById('output');

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function addPrimes(current, n) {
  if (current > n) {
    alert('Calculation finished!');
    return;
  }

  if (isPrime(current)) {
    output.textContent += current + ' ';
  }

  setTimeout(() => addPrimes(current + 1, n), 0);
}

addPrimes(1, 10000);
