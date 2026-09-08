
// Take an employee’s: 
// ● Salary 
// ● Years of experience 
// Bonus rules: 
// Experience >= 10 years → 20% bonus 
// Experience >= 5 years  → 10% bonus 
// Experience >= 2 years  → 5% bonus 
// Below 2 years          
// Calculate and display: 
// ● Original salary 
// ● Bonus 
// ● Final salary 

let salary = 10000;
let yearOfExperience = 15;

if (yearOfExperience < 2) {
    console.log("your salary is: ₹" + salary);
    console.log("you did not earned any bonus.");
} else if (yearOfExperience <= 5) {
    console.log("Your salary is: ₹" + salary);
    console.log("Congratulation! You've earned a 5% bonus.");
    salary = salary + ((salary / 100) * 5);
    console.log("Your salary including bonus: ₹" + salary);
} else if (yearOfExperience <= 10) {
    console.log("Your salary is: ₹" + salary);
    console.log("Congratulations! you've earned a 10% bonus.");
    salary = salary + ((salary / 100) * 10);
    console.log("Your salary including bonus: ₹" + salary);
}  else {
    console.log("Your salary is: ₹" + salary);
    console.log("Congratulations! you've earned a 20% bonus.");
    salary = salary + ((salary / 100) * 20);
    console.log("Your salary including bonus: ₹" + salary);
}