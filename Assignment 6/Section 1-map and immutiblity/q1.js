// Create an array of product names and use map() to create a new array where every product name is converted to uppercase.

let productNames = ["laptops", "mobiles", "headphones"]

let productUpperCase = productNames.map(product => product.toUpperCase())

console.log(productUpperCase);