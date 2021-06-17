const app = require('express')();
const process = require('process');
const Calculator = require('./calc');
const os = require('os');

console.log(os.cpus().length);
console.log(os.platform());
console.log(os.userInfo());

//java -DPORT=7000 lab05
//PORT=7000 node lab05.js
//name=value name=value node filename.js
let port = process.env.PORT || 8080;
let calc = new Calculator();


app.get("/calc/add/:a/:b", (req, res) => {
    let { a, b } = req.params;
    let sum = calc.add(parseInt(a), parseInt(b));
    res.end(`Sum is: ${sum}`);
    //res.end("Sum:" + sum);
});

app.get("/calc/square/:a", (req, res) => {
    let { a } = req.params;
    res.end(`Square: ${calc.square(a)}`);
});

app.put("/calc/subtract/:a/:b", (req, res) => {
    let { a, b } = req.params;
    res.end(`Diff: ${calc.subtract(parseInt(a), parseInt(b))}`);
});

app.post("/calc/multiply", (req, res) => {
    let { num1, num2 } = req.query;
    res.end(`Product: ${calc.multiply(num1, num2)}`);
});


app.listen(port, () => {
    console.log("Server running in port ", port);
});