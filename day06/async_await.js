const square = num => new Promise((resolve, reject) => resolve(num * num));

//async function doSomething() {}
const doSomething = async () => {
    let result = -1;
    await square(10)
            .then(data => { console.log(data); result = data; });

    console.log("End of doSomething", result);    
};

doSomething();
console.log("End of program");