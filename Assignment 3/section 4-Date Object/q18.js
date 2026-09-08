// 18. Store a Specific Date
// Create a Date object for a specific date of your choice and display it.
// Example: new Date("2026-01-01")

let date = new Date("2026-01-01")
console.log("Day and Month:" ,date.toDateString());
console.log("Time:" ,date.toLocaleTimeString());
console.log("Date and time:" ,date.toLocaleString());
console.log("Date:",date.toLocaleDateString());
console.log("Day,Month,Time:",date.toString());
console.log("Time and Zone:",date.toTimeString());