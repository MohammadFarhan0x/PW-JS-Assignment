// 16. Flatten a Nested Array
// Use flat() to convert the nested array into a single-level array.
// Example:
// Input: [1, 2, [3, 4]]
// Output: [1, 2, 3, 4]

let arr = [1, 2, [3, 4, [5, 6, 7], 8, 9], 10]
let flat = arr.flat(Infinity)
console.log(flat);