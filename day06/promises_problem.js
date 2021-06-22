//generate a random number between 1 and 100
//increment the number by 1
//double it
//print the result

const generate = () => Math.round(Math.random() * 100);
const increment = num => num + 1;
const doubleIt = num => num * 2;
const print = value => console.log(value);

try {
    const num = generate();
    const incValue = increment(num);
    const doubledValue = doubleIt(incValue);
    print(doubledValue);    
} catch (error) {
    console.log("Error", error.message);
} 
console.log("End of program");