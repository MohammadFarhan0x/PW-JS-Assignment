// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total quantity of all items.

let products = [
    {
        name: "Laptop",
        quantity: 1
    },
    {
        name: "Mouse",
        quantity: 2
    },
    {
        name: "Key-Board",
        quantity: 1
    },
    {
        name: "Mouse-Pad",
        quantity: 3
    },
    {
        name: "Headphone",
        quantity: 1
    },
    {
        name: "spactacles",
        quantity: 3
    }
   
]

let totalQuantity = products.reduce((acc,cur) => {
   acc = acc + cur.quantity
    return acc
}, 0)
console.log(totalQuantity);
