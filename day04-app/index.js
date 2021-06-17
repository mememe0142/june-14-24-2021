var i = 10;
i = "String";
i = true;

let express = require('express');
let app = express();

let person = { name: "Sam", age: 12 };

app.get("/person", (req, res) => {
    res.json(person);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
    res.end("Login page");
});

app.get("/hello", (req, res) => {
    res.end("Hello express js");
});

//http://localhost:8080/hello/{name}
app.get("/hello/:name", (req, res) => {
    let { name } = req.params;
    res.end("Hello " + name);
});

//http://localhost:8080/greet?name=Ram
app.get("/greet", (req, res) => {
    let { name } = req.query;
    res.end("Hey " + name);
});

app.listen(8080, () => {
    console.log("Server running in 8080");
});