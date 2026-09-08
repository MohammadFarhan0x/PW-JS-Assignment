// Create variables: 
// balance 
// withdrawAmount 
// Check: 
// 1. Withdrawal amount must be greater than 0. 
// 2. Withdrawal amount must not be greater than the balance. 
// 3. If valid, subtract the withdrawal amount. 
// 4. Display the remaining balance. 
// Example: 
// Balance: ₹10000 
// Withdraw: ₹3000 
// Withdrawal successful 
// Remaining balance: ₹7000 

let balance = 10000;
let withdrawAmount = 3000;

if(balance <= 0){
    console.log("Teri maa chhod k gayi ya tera baap.");
} else {
    if(balance > 0 && withdrawAmount <= balance){
        console.log("Withdrawal Successfully");
        console.log("Withdraw: ₹" + withdrawAmount);
        remainingBalance = balance - withdrawAmount;
        console.log("Remaining Balance: ₹" + remainingBalance);
    } else {
        console.log("Hosh me aao abhijit");
    }
}