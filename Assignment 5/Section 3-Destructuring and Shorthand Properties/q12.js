// Create a product object containing name and price. Use destructuring to store the name property in a variable named productName.

let product = {
    name: "Samsung S26",
    price: 124999
}

let { name: productName } = product
console.log(`productName = ${productName}`);




