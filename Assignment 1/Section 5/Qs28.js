// Create the following menu: 
// 1. Check Balance 
// 2. Deposit Money 
// 3. Withdraw Money 
// 4. Exit 
// Use switch-case. 
// Rules: 
// ● Check Balance → Display current balance 
// ● Deposit → Add money to balance 
// ● Withdraw → Check whether sufficient balance exists 
// ● Exit → Display a goodbye message 
// ● Invalid choice → Display an error message

let balance = 10000;
let option = "withdraw Money";

switch (option) {
    case "check Balance":
        console.log("Your current balance is: ₹", balance);
        break;

    case "Deposite Money":
        let addMoney = 2000;
        balance = balance + addMoney;
        console.log("Congratulation! You are added: ₹", addMoney, "in your current balance.");
        console.log("your balance is: ₹", balance);
        break;

    case "withdraw Money":
        let withdrawMoney = 3000;
        if (withdrawMoney > balance) {
            console.log("Invalid! your balance is only: ₹", balance, "you can't withdra: ₹", withdrawMoney);
        } else {
            console.log("Congratulation! transaction successfull.");
            console.log("you are withDrawing: ₹", withdrawMoney);
            balance = balance - withdrawMoney;
            console.log("Your current balane is: ₹", balance);
        }
        break;

    case "Exit":
        console.log("THANKYOU for coming, Visit again.");
        break;

    default:
        console.log("Chor hai ye BKL");

}