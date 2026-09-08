// Create a function that takes two numbers and returns the greater number.

function greater(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater`;
    } else {
        return `${num2} is greater`;
    }
}

let res = greater(678, 989);
console.log(res);