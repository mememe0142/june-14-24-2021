let express = require('express');
let app = express();

//app.use(express.json()); //Plugin a json body parser as a middleware
app.use(express.urlencoded());//Plugin a urlencoded body parser as a middleware

const headerCheck = (req, res, next) => {
    if(req.headers["training"]) {
        next();
    } else {
        res.end("Header training missing");
    }
}
//app.use(headerCheck); //Globally available for all the routes
app.post("/hi/:name", [headerCheck], (req, res) => {
    let { name } = req.params;
    res.end(`Hi ${name}`);
});

//use the middleware only for this route
app.post("/hello", [express.json()], (req, res) => {
    let { name } = req.body;
    res.end(`Hello ${name}`);
});

app.post("/bye", (req, res) => {
    let {name} = req.body;
    res.end(`Bye Bye ${name}`);
});

app.get('/temperature/:city', (req, res) => {
    let {city} = req.params;
    let temperature = Math.round(Math.random() * 50);
    res.end(`Temperature of ${city} is ${temperature}`);
});



app.listen(8080, () => console.log("server running in 8080"));