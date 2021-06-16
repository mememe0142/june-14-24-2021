//rest operator ...

const sum = (... args) => {
    let result = 0;
    for(let i = 0; i < args.length; i++) {
        result += args[i];
    }
    console.log('Sum', result);
};

sum(10, 20, 304, 40);

//spread operator ...
let arr1 = [10, 20];
let arr2 = [30, 40];
let numbers = [...arr1, ...arr2];
console.log(numbers);

let obj = { model: "BMW", year: 2020 };
let car = {
    ...obj,
    color: "Black"
};
console.log(car);
car.year = 2021;
console.log(car, obj);

