// Create an array of product objects containing name and price. Use filter() to get products with a price greater than 1000 .

let products = [
    {
        name: "Laptop",
        price: 40000
    },
    {
        name: "Samsung S26",
        price: 250000
    },
    {
        name: "Mouse",
        price: 300
    }

]

let price = products.filter((amount) => {
    if (amount.price >= 1000) {
        return amount
    }
})

console.log(price);