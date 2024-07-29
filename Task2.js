function sumNumbers(arr) {
    return arr.reduce(function (accumulator, curValue) {

        return accumulator + curValue
      
      }, 0)
}

const numbers = [1,2,3,4,5];
const sumofNumbers = sumNumbers(numbers);

console.log(sumofNumbers);