const eat = function() {
    console.log("Eating");
};

const sleep = function() {
    console.log("Attending Nodejs class");
};

//Higher order function
const doSomething = function(arg) {
    if(typeof(arg) === "function") {
        arg();
    }
};

doSomething(eat); //doSomething(eat()) is different;
doSomething(sleep);
doSomething(function() {
    console.log("I am confused");
});
doSomething(12);
doSomething(() => console.log("arrow"));