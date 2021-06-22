const gen = () => {
    const rnd = Math.round(Math.random() * 10);
    return new Promise((resolve, reject) => {
        if(rnd > 5) {
            resolve(rnd);
        } else {
            reject(rnd);
        }
    });
}

function generateRandomNumber() {
    const rnd = Math.round(Math.random() * 10);
    const promise = new Promise(function(resolve, reject) {
        resolve(rnd);
    });
    return promise;
}


const inc = num => new Promise((resolve, reject) => resolve(num + 1));
const doubleIt = num => new Promise((resolve, reject) => resolve(num * 2));
const print = num => {
    return new Promise((resolve, reject) => {
        console.log("Value is", num);
        resolve();
    });
};
gen()
    .then(num => inc(num))
    .then(num => doubleIt(num))
    .then(num => print(num))
    .catch(err => console.log("Error ", err));

