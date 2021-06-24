function now() {
    return new Date().toLocaleTimeString();
};

function today() {
    return new Date().toLocaleDateString();
};

module.exports.now = now;
module.exports.today = today;