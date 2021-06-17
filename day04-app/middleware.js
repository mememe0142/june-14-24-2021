let app = require('express')();

const logging = (req, res, next) => {
    console.log("************Logging", req.url, new Date().toLocaleTimeString());
    next();
};

const security = (req, res, next) => {
    console.log("************Security check", req.url, new Date().toLocaleTimeString());
    next();
};

app.use(logging, security);

app.get("/hello", (req, res) => {
    res.end("Hello middleware in express");
});
//Before sending the response, middlewares?

app.listen(8080, () => {
    console.log("Server running in 8080");
});