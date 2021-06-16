//replace setTimeout with say readFile or writeFile or talk to a server, it works in a similar fashion
setTimeout(() => {
    console.log("Inside timeout 1")
}, 0);
setTimeout(() => {
    console.log("Inside timeout 2")
}, 0);

console.log("End of program");