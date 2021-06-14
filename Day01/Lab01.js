let numbers = [1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100];

//Imperative style of coding

//Print all the numbers
for(let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    console.log(num);
}
console.log();

//Print the sum of all numbers
let sum = 0;
for(let i=0; i<numbers.length; i++) {
    sum += numbers[i];
}
console.log("sum:", sum);
console.log();

//Print the first odd number
let firstOddNum;
for(let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    if(num % 2 !== 0) {
        firstOddNum = num;
        break;
    }
}
console.log("First odd number:", firstOddNum);

// Generate an list of squares of all numbers
let squares = [];
for(let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    squares.push(num * num);
}
console.log("Squares of all numbers: ", squares);
console.log();

//Generate a list of numbers divisible by 5. 
let numbersDivBy5 = [];
for(let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    if(num % 5 === 0) {
        numbersDivBy5.push(num);
    }
}
console.log("numbers divisible by 5: ", numbersDivBy5);
console.log();

//Print all the even numbers
for(let i=0; i<numbers.length; i++) {
    let num = numbers[i];
    if(num % 2 === 0) {
        console.log(num);
    }
}