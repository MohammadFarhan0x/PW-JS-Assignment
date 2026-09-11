// Create an array of product prices. Use map() to create a new array where every price is increased by 10%. Keep the original array unchanged.

let prices = [100, 200, 300]

let increasedPrice = prices.map((price) => {
    let increse = price + (price * 0.1)
    return increse
})

console.log(increasedPrice);