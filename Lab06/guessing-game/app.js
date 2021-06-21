const express = require('express');
const app = express();
const Game = require('./src/game');

app.use(express.static('public'));
let game = new Game();

app.post("/play", (req, res) => {
    let {guess} = req.query;
    game.play(guess);
    let output = {
        message: game.message,
        attempts: game.attempts
    };
    res.json(output);
});


app.listen(8080, () => console.log("Server running in 8080"));