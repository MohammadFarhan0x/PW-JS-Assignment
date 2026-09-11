// Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final cart total by multiplying the price and quantity of each item.


let products = [
    {
        name: "Mouse",
        price: 500,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 1000,
        quantity: 1
    }
]

let totalPrice = products.reduce((acc, curr) => {
    acc = (curr.quantity * curr.price) + acc
    return acc
}, 0)

console.log(totalPrice);