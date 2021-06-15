let fs = require('fs');

//EVENT LOOP
fs.writeFile(__dirname + "/training2.txt", 
        "Async training", 
        null, 
        (err) => {
            if(err) {
                console.log("Error writing file", err.message);
            } else {
                console.log("Done");
            }
});
fs.readFile(__dirname + "/training2.txt", null, (err, data) => {
    if(err) {
        console.log("Error reading file", err.message);
    } else {
        console.log(data.toString());
    }
});
console.log("end of program");




/*
//THIS STYLE IS ALMOST NO-NO IN JavaScript WORLD
fs.writeFileSync(__dirname + "/training.txt", "Welcome to NodeJS training");
console.log("Done");

let contents = fs.readFileSync(__dirname + "/training.txt");
console.log(contents.toString());
*/