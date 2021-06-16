let arr = [100, 200];
// let i = arr[0];
// let j = arr[1];

//const [data, setData] = useState('');
//array destructuring
let [i, j] = arr;
console.log(i, j);

const [_, y] = arr;
console.log(y);

let person = { name: "Sam", age: 12 };
// let name = person.name;
// let age = person.age;
//object destructuring
let { name, age } = person;
console.log(name, age);