function filterPrimes(arr) {
    return arr.filter(function(number) {
      if (number <= 1) return false;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
  }

  const numbers = [1, 2, 3, 4, 5, 6];
  const primes = filterPrimes(numbers);
  
  console.log(primes); 
  