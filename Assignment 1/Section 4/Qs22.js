// Create this menu:
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus
// Take the user’s choice and two numbers.
// Use switch-case to perform the selected operation.


let choice = "%";
let firstNumber = 95;
let secondNumber = 10;

switch (choice) {
    case "+":
        console.log("Addition:", firstNumber + secondNumber);
        break;

    case "-":
        console.log("Substraction:", firstNumber - secondNumber);
        break;

    case "*":
        console.log("Multiplication:", firstNumber * secondNumber);
        break;

    case "/":
        if (secondNumber === 0) {
            console.log("Not Defined");
        } else {
            console.log("Division:", firstNumber / secondNumber);
        }
        break;

    case "%":
        if (secondNumber === 0) {
            console.log("Not defined");
        } else {
            console.log("Modulus:", firstNumber % secondNumber);
        }
        break;

    default:
        console.log("Invalid");
}