// Take: 
// ● First number 
// ● Second number 
// ● Operator 
// Supported operators: 
// + - 
// * 
// / 
// % 
// Use switch-case. 
// Example: 
// First number: 20 
// Second number: 5 
// Operator: * 
// Output: 100 

let num1 = 20;
let num2 = 5;
let operator = "*"

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    case "%":
        console.log(num1 % num2);
        break;

    default:
        console.log("Invalid");


}