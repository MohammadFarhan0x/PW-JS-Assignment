// Take:
// age
// numberOfTickets
// Ticket prices:
// Age below 12 → ₹100
// Age 12–59
// Age 60+
// → ₹200
// → ₹120
// Calculate the total ticket price. 
// Example: 
// Age: 25 
// Tickets: 3  
// Total: ₹600 

let age = 13;
let numberOfTickets = 3;
let ticketPrices;

if(age > 0 && age <= 12){
    price = numberOfTickets * 100;
    console.log("Ticket Prices: ₹" + price);
} else if(age <= 59){
    price = numberOfTickets * 200;
    console.log("Ticket Prices: ₹" + price);
} else{
    price = numberOfTickets * 120;
    console.log("Ticket Prices: ₹" + price);
}