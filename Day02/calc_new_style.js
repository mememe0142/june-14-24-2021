function math(operation) {
    let num1 = 10;
    let num2 = 20;
    console.log(operation(num1, num2));
}

math(function(a, b) {
    return a + b;
});

math(function(a, b) {
    return a - b;
});

math(function(a, b) {
    return a * b;
});
math(function(a, b) {
    return a / b;
});