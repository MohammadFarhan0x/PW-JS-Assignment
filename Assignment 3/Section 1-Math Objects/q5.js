// 5. Absolute Value
// Use Math.abs() to find the positive value of -25.
// Example:
// Input: -25
// Output: 25

function toPositiveNumber(num) {
    if (num >= 0) {
        return num;
    } else {
        return num * -1;
    }
}

let modulus = toPositiveNumber(-82);
console.log(modulus);

let num = -190;
let positiveNumber = Math.abs(num);
console.log(positiveNumber);

