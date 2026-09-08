// Create variables for: 
// ● Product price 
// ● Quantity 
// Calculate the total bill. 
// Then apply a discount of 
// 10%
//  and display: 
// ● Original bill 
// ● Discount amount 
// ● Final bill

console.log("Product Price--");
console.log('');
console.log("Namkeen : ₹200");
console.log("biscuit : ₹50");
console.log("bodyLotion : ₹1100");
console.log("serum : ₹900");
console.log("sunScreen : ₹800");
console.log('');
console.log("Quantity--");
console.log('');
let Namkeen = 200;
let biscuit = 50;
let bodyLotion = 1100;
let serum = 900;
let sunScreen = 800;
console.log("namkeen : 1");
console.log("biscuit : 3");
console.log("bodyLotion : 1");
console.log("serum : 2");
console.log("sunScreen : 1");
console.log('');
let totalPrice = Namkeen + (biscuit * 3) + bodyLotion + (serum * 2) + sunScreen;
console.log("totalPrice:");
console.log(totalPrice);
console.log('');
let discounAmount = (totalPrice/100)*10;
console.log("discounAmount:");
console.log(discounAmount);
console.log('');
let finalBill = totalPrice - discounAmount;
console.log("finalBill:");
console.log(finalBill);