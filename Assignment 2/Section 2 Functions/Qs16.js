// Create a function named calculateTotal(price, quantity) using a function declaration. The function should calculate and display the total price.

let calculateTotal = function (price, quantity) {
    console.log(`Price`, price,"," ,`Quantity`, quantity);
    
    return price * quantity
}

let total = calculateTotal(299, 3)
console.log(`Total price`, total);
    
