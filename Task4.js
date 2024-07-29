function operation(arr){
    const arr1 = arr.filter(function(number) {
        if (number<1) return false;
        if (number%2!==0) {
            return true;
        } else {
            return false;
        }
    });

    const arr2 = arr.map(function(number) {
        return Math.pow(number,2);
    });

    const arr3 = arr2.reduce(function(number,currNumber) {
        return number+currNumber
    },0);

    const average = arr2.length > 0  ? arr3 / arr2.length :0;

    return average;
}

const nums = [1,2,3,4,5];
const newnums = operation(nums);

console.log(newnums);