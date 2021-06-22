setTimeout(() => console.log("Inside timeout"), 0);

const later1 = new Promise((resolve, reject) => resolve("Inside promise1"));
const later2 = new Promise((resolve, reject) => resolve("Inside promise2"));

later1
    .then(data => console.log(data));

later2
    .then(data => console.log(data));   

console.log("End of program");