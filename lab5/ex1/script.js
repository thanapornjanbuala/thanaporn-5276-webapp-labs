function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimes(event) {
    event.preventDefault(); // Prevent form submission
  
    const numberInput = document.getElementById("numberInput");
    const resultDiv = document.getElementById("result");
    const number = parseInt(numberInput.value);
  
    // Check if the input is a positive integer
    if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
      resultDiv.innerHTML = "Please enter a valid positive integer.";
      return;
    }
  
    // Print prime numbers up to the given number
    let primes = [];
    for (let i = 2; i <= number; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    resultDiv.innerHTML = "Prime numbers up to " + number + ": " + primes.join(", ");
  }
  
  // Add event listener to the form
  const form = document.querySelector("form");
  form.addEventListener("submit", printPrimes);
  