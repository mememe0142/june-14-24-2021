const generate = () => 20;//Math.round(Math.random() * 100);
const increment = num => num + 1;
const doubleIt = num => num * 2;
const print = value => console.log(value);


//TEDIOUS TO READ, WRITE AND MAINTAIN
setTimeout(() => {
    const rnd = generate();
    setTimeout(() => {
        const incValue = increment(rnd);
        setTimeout(() => {
            const doubledValue = doubleIt(incValue);
            setTimeout(() => console.log(doubledValue), 1000);
        }, 1000);
    }, 1000);
}, 1000);

const generateRandom = () => {
    const rnd = 20;//Math.round(Math.random() * 100);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(rnd), 1000);
    });
};

const incrementNum = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num + 1), 1000);
    });
};

const doubleNum = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 2), 1000);
    }); 
};

generateRandom()
    .then(num => incrementNum(num))
    .then(num => doubleNum(num))
    .then(num => console.log(num));