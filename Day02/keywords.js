console.log(__dirname);
console.log(__filename);
console.log(module);

//when you start a nodejs application, by running a file say app.js
//Node wraps the code in app.js in a function and calls it
/*
(function someDummyName(module, exports, __dirname, __filename, require) {
console.log(__dirname);
console.log(__filename);
console.log(module);
})

someDummyName(module{}, exports{}, "dir name", "file name", {})

*/