// 6. Power and Square Root
// Use Math.pow() to calculate 2 raised to the power 3 and Math.sqrt() to find the square root of 64.
// Example:
// Math.pow(2, 3) → 8
// Math.sqrt(64) → 8

function power(num) {
    return num * num;
}

let square = power(91);
console.log(square);


let num3 = 9;
let num4 = 2;
let exp = Math.pow(num3, num4);
console.log(exp);



let num1 = 144;
let sqrt = Math.sqrt(num1);
console.log(sqrt);

function getSqrt(num) {
    return num ** 0.5;
}

let number = getSqrt(81);
console.log(number);