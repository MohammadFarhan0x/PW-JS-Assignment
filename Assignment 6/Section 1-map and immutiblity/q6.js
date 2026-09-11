// Create an array of product objects containing name and price. Use map() to create a new array where each product also has an inStock property with the value true.

let products = [
    {
        name: "Laptop",
        Price: 500000
    },
    {
        name: "Mouse",
        price: 500
    }
]

let updatedProduct = products.map((product) => {
    product.inStock = true
    return product
})

console.log(updatedProduct);