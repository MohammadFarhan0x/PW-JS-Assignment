// Create an array of product objects containing name and inStock. Use filter() to create a new array containing only the products that are in stock.

let products = [
    {
        name: "Laptop",
        inStock: true
    },
    {
        name: "Mobiles",
        inStock: true
    },
    {
        name: "Guitar",
        inStock: false
    }
]

let inStock = products.filter((product) => {
    if (product.inStock === true) {
       return product
    }
   
    // return product.inStock === true
})

console.log(inStock);