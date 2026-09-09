// Create one array containing frontend technologies and another containing backend technologies. Use the spread operator to combine them into a single array.

let frontEnd = ["HTML", "CSS", "JavaScripts"]
let backEnd = ["Node.js", "Express"]

let res = frontEnd.concat(backEnd);
// console.log(res);

let fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);
