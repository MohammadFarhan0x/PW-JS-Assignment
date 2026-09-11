// Create an array of order objects containing amount. Use reduce() to calculate the total order amount.

let amount = [
    { amount: 500 },
    { amount: 1500 },
    { amount: 2000 }
]

let totalAmount = amount.reduce((acc, cur) => {
    acc += cur.amount
    return acc
}, 0)


console.log(totalAmount);