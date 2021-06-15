function workOld() {
    console.log("working");
}

const workLatest = function() {
    console.log("Working");
};

const work = () => console.log("working");
work();

// function add(a, b) {
//     return a + b;
// }
//similar to lambda expressions
const add = (a, b) => a + b; //return keyword is not required
const subtract = (a, b) => {
    return a - b;
};