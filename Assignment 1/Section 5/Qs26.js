
// Create the following menu: 
// 1. Burger  → ₹150 
// 2. Pizza   → ₹250 
// 3. Pasta   → ₹180 
// 4. Sandwich → ₹120 
// Take the customer’s choice and quantity. 
// Use switch-case to calculate the total price. 
// Example: 
// Choice: 2 
// Quantity: 3 
 
// Total: ₹750 

let choice = 2;
let quantity = 3;
switch (choice) {
    case 1:
        console.log("Burger: ₹" + 150);
        console.log("quantity: " + quantity);
        price = 150 * quantity;
        console.log(price);
        break;

    case 2:
        console.log("Pizza: ₹" + 250);
        console.log("quantity: " + quantity);
        price = 250 * quantity;
        console.log(price);
        break;

    case 3:
        console.log("Pasta: ₹" + 180);
        console.log("quantity: " + quantity);
        price = 180 * quantity;
        console.log(price);
        break;

    case 4:
        console.log("Samdwitch: ₹" + 120);
        console.log("quantity: " + quantity);
        price = 120 * quantity;
        console.log(price);
        break;

        default:
        console.log("Bas itna hi item h.");

}