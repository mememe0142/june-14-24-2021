* Let's use a third party library __passport__ for plugging in authentication in our application
* Let's install the following libraries __express__, __passport__ and __passport-local__
* __sudo npm i --save express passport passport-local__
* Create __passport-example.js__ with the following code

``` javascript
let express = require('express');
let app = express();

app.get('/login',  (req, res) => {
    res.end('Please login here');
});

app.post('/login', [express.json()], (req, res) => {
    
});

app.get('/home',  function (req, res) {
    res.end("Welcome home");
})

app.listen(8080, () => console.log("Server started in 8080"));
```

* In the code above let's build the __/login__ __POST__ method to authenticate our credentials and transfer control to __/home__

* We'll define a passport strategy to begin with

``` javascript
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

```

* Let's modify the __/login__ to plugin the passport middleware __mylocalstrat__ as shown below

``` javascript
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

```

* Access __/login__ in postman using the body 
``` json
{
    "username": "admin",
    "password": "admin"
}
```