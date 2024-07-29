const numbers = [1,2,3,4,5];

function cubeNumbers(arr) {
    return arr.map(function(num) {
      return Math.pow(num, 3);
    });
  }

  const cubeofNumbers = cubeNumbers(numbers);
  
  console.log(cubeofNumbers);