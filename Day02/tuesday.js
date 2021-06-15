const greet = function(name) {
    console.log("Hello " + name);
};

//export default greet;
module.exports.greet = greet;