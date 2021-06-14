let arr = [];
let numbers = [1, 2, 3, 4, 5];
let values = [1.2, true, "some string", null];
for(let i=0; i < values.length; i++) {
    console.log(values[i]);
}
//arrays in JS are like maps(dictionary)
let romanNumerals = [];
romanNumerals["I"] = 1;
romanNumerals["II"] = 2;
romanNumerals["III"] = 3;

for(let key in romanNumerals) {
    console.log(key, romanNumerals[key]);
}
let coll = [];
coll.push(1);
coll.push(3);