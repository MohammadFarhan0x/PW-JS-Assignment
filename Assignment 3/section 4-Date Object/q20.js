// 20. Simple Date Difference
// Create two Date objects for two different dates and find the difference between them in milliseconds.
// Example:
// Date 1: January 1, 2026
// Date 2: January 2, 2026

let date1 = new Date("01/01/2026")
console.log("Date 1:",date1.toDateString());

let date2 = new Date("01/02/2026")
console.log("Date 2:",date2.toDateString());

let res = date2 - date1;
console.log(res);


