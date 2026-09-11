// Create an array of product names and use reduce() with an accumulator to count the total number of
// products

let products = ["Laptop", "Moniter", "Television", "Guitar", "mobile", "PS5", "Simulator", "Guns", "Swords", "Cars", "Bikes", "Helicopter", "Aeroplane"]

let count = products.reduce((acc) => {
    acc = acc + 1
    return acc
}, 0)

console.log(count);
