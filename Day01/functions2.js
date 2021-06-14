//runs all the function definitions before the execution of statements from the top
//Function hoisting
//You can define a function in 100th line but invoke it from 10th line; 
//The order of definition of functions and calls don't matter
function work() {
    console.log("Working 1");
}
work();
function work() {
    console.log("Working 2");
}
