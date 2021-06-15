const greet = name => {
    console.log("Hello " + name);
};

//export default greet;
module.exports.greet = greet;