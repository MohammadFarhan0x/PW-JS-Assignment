// Create an object containing a user's name and email. Use Object.entries() and forEach() to display each key along with its value.

let user = {
    name: "Rahul",
    email: "rahul@example.com",
    age: 20,
    role: "developer"
}

Object.entries(user).forEach(([key,value]) => {
    console.log(`${key} : ${value}`);
})