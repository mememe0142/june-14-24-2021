//Promise is an entity which executes a piece of code
//and promises a result much later
//Java is CompletableFuture

const generateRandom = () => {
    const rnd = Math.round(Math.random() * 100);
    return new Promise((resolve, reject) => {
        resolve(rnd);
    });
};

const increment = num => {
    return new Promise((resolve, reject) => {
        resolve(num + 1);
    });
};

const doubleIt = num => {
    return new Promise((resolve, reject) => {
        resolve(num * 2)
    }); 
};

//Promises are executed asynchronously
generateRandom()
    .then(num => increment(num))
    .then(num => doubleIt(num))
    .then(num => console.log(num));
 
console.log("End of program");    