// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n.

function sumNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum += i;
    }
    console.log(sum);
}
sumNumbers(199);
