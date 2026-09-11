// Create an array of product prices and use reduce() to calculate the total price of all items in the cart.

let productPrices = [500, 1200, 300]

let sumOfPrices = productPrices.reduce((acc,curr) => {
    return acc + curr
}, 0)

console.log(sumOfPrices);