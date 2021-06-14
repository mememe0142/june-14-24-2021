//All functions in JS are implicitly overloaded
function eat(item) {
    console.log(arguments);
    console.log("Eating " + item);
}

eat("Rice");
eat("Bread");
eat(2, "slices", "of", "bread");
eat(10, "rotis");
eat(24, 7);
eat(false);
eat();

function add(a, b) {
    return a + b;
}

console.log(add(12, 23));
console.log();

//You can define a function with the same name any number of times;
//The latest definition overrides the previous ones
function print() {
    console.log("print()");
}

function print(data) {
    console.log("print(data)");   
}

function print(data1, data2) {
    console.log("print(data1, data2)");
}

print();
print(12);
print(12, 13);
print(1, 2, 3, 4, 5);

