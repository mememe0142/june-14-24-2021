let numbers = [1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100];
/*
Print all the numbers
Print the sum of all numbers
Print the first odd number
Generate an list of squares of all numbers
Generate a list of numbers divisible by 5.
Print all the even numbers

*/

numbers.forEach(it => console.log(it));

const sum = numbers.reduce((prevValue, currentValue) => prevValue + currentValue);
console.log("Sum", sum);

const firstOddNumber = numbers.find(num => num % 2 !== 0);
console.log("First odd number", firstOddNumber);

const lstOfSquares = numbers.map(num => num * num);
console.log("List of squares of all numbers", lstOfSquares);

const lstOfNumbersDivBy5 = numbers.filter(it => it % 5 === 0);
console.log("List of numbers divisible by 5", lstOfNumbersDivBy5);
   
const lstEvenNumbers = numbers.filter(it => it % 2 === 0);
console.log("List of even numbers", lstEvenNumbers);