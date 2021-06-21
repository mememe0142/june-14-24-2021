const play = (guess, target) => {
    let message = '';
    if(guess > target) {
        message = "Aim Lower";
    } else if(guess < target) {
        message = "Aim Higher";
    } else {
        message = "You've got it!!!";
    }
    return message;
}

module.exports = play;