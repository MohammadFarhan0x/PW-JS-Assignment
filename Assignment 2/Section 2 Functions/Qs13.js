//Create a function that takes a number and checks whether it is even or odd.

function diffrentiate(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

let check = diffrentiate(100);
console.log(check);