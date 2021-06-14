const sum = function() {
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log('Sum', result);
};

const max = function() {
    let largest = 0;
    for(let i = 0; i < arguments.length; i++) {
        let num = arguments[i];
        if(num > largest) {
            largest = num;
        }
    }
    console.log('Largest', largest);
};

//You need to explicitly export functions or variables so that you can use it from other files
module.exports.add = sum;
module.exports.greatest = max;

//export default add;