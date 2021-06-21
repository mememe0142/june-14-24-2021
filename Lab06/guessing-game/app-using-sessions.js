const express = require('express');
const app = express();
const session = require('express-session');

const play = require('./src/game_play');

app.use(session({
    secret: 'training'
}));
app.use(express.static('public'));


app.post("/play", (req, res) => {
    let {guess} = req.query;
    let game = {};
    if(req.session.game) {
        game = req.session.game;
        game.attempts = game.attempts + 1;
    } else {
        game = {
            target: Math.round(Math.random() * 100),
            attempts: 1,
            message: ''
        };
        req.session.game = game;
    }
    game.message = play(guess, game.target);

    let output = {
        message: game.message,
        attempts: game.attempts
    };
    res.json(output);
});


app.listen(8080, () => console.log("Server running in 8080"));