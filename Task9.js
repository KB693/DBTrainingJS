function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return reject(new Error('Invalid input: both arguments must be numbers.'));
      }
  
      switch (operation) {
        case 'add':
          resolve(num1 + num2);
          break;
        case 'subtract':
          resolve(num1 - num2);
          break;
        case 'multiply':
          resolve(num1 * num2);
          break;
        case 'divide':
          if (num2 === 0) {
            reject(new Error('Division by zero is not allowed.'));
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject(new Error('Invalid operation. Please use add, subtract, multiply, or divide.'));
      }
    });
  }
  
  calculate(10, 5, 'add')
    .then(result => console.log(result)) // Output: 15
    .catch(error => console.error(error.message));
  
  calculate(10, 5, 'subtract')
    .then(result => console.log(result)) // Output: 5
    .catch(error => console.error(error.message));
  
  calculate(10, 5, 'multiply')
    .then(result => console.log(result)) // Output: 50
    .catch(error => console.error(error.message));
  
  calculate(10, 0, 'divide')
    .then(result => console.log(result))
    .catch(error => console.error(error.message)); // Output: Division by zero is not allowed.
  
  calculate(10, 5, 'modulus')
    .then(result => console.log(result))
    .catch(error => console.error(error.message)); // Output: Invalid operation. Please use add, subtract, multiply, or divide.
  