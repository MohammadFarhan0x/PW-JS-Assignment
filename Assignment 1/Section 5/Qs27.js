
// Take the electricity units consumed. 
// Calculate the bill using: 
// 0–100       → ₹5/unit 
// 101–200     → ₹7/unit 
// Above 200   → ₹10/unit 
// Then apply: 
// Bill >= ₹2000 → 10% discount 
// Otherwise     → No discount 
// Display: 
// Units 
// Original Bill 
// Discount 
// Final Bill 
// let units = 270; 

if (units < 0) {
    console.log("Invalid Bill");
} else if (units <= 100) {
    console.log("unit usage: ", units);
    bill = units * 5;
    console.log("Original Bill: ₹" + bill);

} else if(units <= 200){
    console.log("Unit usage: "+ units);
    bill = (100 * 5) + ((units - 100) * 7);
    console.log("Original Bill: ₹" + bill);    

} else {
    console.log("Unit Usage: "+ units);
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
    console.log("Original Bill: ₹"+ bill);

    if (bill >= 2000) {
        discount = ((bill/100) * 10)
        console.log("discount: ₹" + discount);
        finalBill = bill - discount;
        console.log("Final bill including discont: ₹" + finalBill);  
    } else {
        console.log("You didn't recieve any discount.");
    }
}