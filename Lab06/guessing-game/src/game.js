class Game {
    constructor() {
        this.target = Math.round(Math.random() * 100);
        this.attempts = 0;
        this.message = "";
    }

    play(guess) {
        this.attempts += 1;
        if(guess > this.target) {
            this.message = "Aim Lower";
        } else if(guess < this.target) {
            this.message = "Aim Higher";
        } else {
            this.message = "You've got it!!!";
        }
    }
}
module.exports = Game;