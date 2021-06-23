* Here's a small exercise that will help you get accustomed to functional style of coding in JavaScript. NodeJS API follows this style extensively.
* Create Lab03.js file

* Create an array of numbers 1,2,3,4,5,6,30,56,84,23,100
* Implement the following in a functional style instead of using for loops

1) Print all the numbers
2) Print the sum of all numbers
3) Print the first odd number
4) Generate an list of squares of all numbers
5) Generate a list of numbers divisible by 5. 
6) Print all the even numbers

Hint:
1) Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
Here's how you implement (1) in functional style

``` javascript

let numbers = [1,2,3,4,5,6,30,56,84,23,100];
numbers.forEach(function(num){
	console.log(num);
});

```

Here's how you implement (1) using arrow functions

``` javascript

let numbers = [1,2,3,4,5,6,30,56,84,23,100];
numbers.forEach(num => console.log(num));

``` 