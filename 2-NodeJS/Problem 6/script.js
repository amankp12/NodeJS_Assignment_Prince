const _ = require('lodash');

function sumOfEvenNumbers(numbers){
    const evenNumbers = _.filter(numbers, num => num % 2 === 0);
    return _.sumBy(evenNumbers);
}

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvenNumbers(Numbers));