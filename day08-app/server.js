const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const secretKey = "End of training";

const authCheck = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, secretKey, (err, data) => {
            if(err) {
                res.sendStatus(401);
            } else {
                req.username = data.username;
                next();
            }
        });
    }

};

app.get("/home", [authCheck], (req, res) => {
    res.end(`Welcome home ${req.username}`);
});

app.post("/login", [express.json()], (req, res) => {
    let { username, password } = req.body;
    //perform you (passport) authentication here
    let token = jwt.sign({username}, secretKey, {expiresIn: '1m'});
    res.json({token});
});

app.listen(8080, () => console.log("Server running in 8080"));