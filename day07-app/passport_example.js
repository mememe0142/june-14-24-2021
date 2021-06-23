let express = require('express');
let app = express();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

passport.use('mylocalstrat', new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
}, (username, password, done) => {
    if(username === "admin" && password === "admin") {
        done(null, {username, password});
    } else {
        done({ message: 'Invalid credentials'});
    }
}));
app.get('/login',  (req, res) => {
    res.end('Please login here');
});

app.post('/login', [express.json()], (req, res) => {
    passport.authenticate('mylocalstrat', {session: false }, (err, user, info) => {
        if(err) {
            res.end(err.message);
        } else if(info) {
            res.end(info.message);
        } else {
            res.redirect('/home');
        }
    })(req, res);
});

app.get('/home',  function (req, res) {
    res.end("Welcome home");
})

app.listen(8080, () => console.log("Server started in 8080"));