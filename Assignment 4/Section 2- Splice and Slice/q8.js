// 8. Add an Element Using splice()
// Use splice() to add "CSS" between "HTML" and "JavaScript".
// Example:
// Input: ["HTML", "JavaScript"]
// Output: ["HTML", "CSS", "JavaScript"]

let arr = ["HTML", "JavaScript"]
arr.splice(1, 0, "CSS")
console.log(arr);