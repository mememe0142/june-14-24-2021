let express = require('express');
let app = express();

//app.use(express.json()); //Plugin a json body parser as a middleware

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


app.listen(8080, () => console.log("server running in 8080"));