// 2. Random Whole Number
// Use Math.random() and Math.floor() to generate a random whole number between 1 and 10.
// Example:
// Output: Any whole number from 1 to 10

let min = 1;
let max = 10;
let wholeNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(wholeNumber);