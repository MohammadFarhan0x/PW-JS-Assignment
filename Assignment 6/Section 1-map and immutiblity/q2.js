// Create an array of product prices and use map() to create a new array where each price is displayed with a ₹ symbol.

let price = [100, 250, 180]

let priceWithSymbol = price.map(symbol => `₹${symbol}`)

console.log(priceWithSymbol);
