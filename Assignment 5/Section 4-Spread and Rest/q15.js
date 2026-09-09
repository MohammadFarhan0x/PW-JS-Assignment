// Create a user object and use the spread operator to create a copy of it.

let user = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer",
    age: 20,
    exp: 5    
}

let { ...userDetail } = user
console.log("New User =", userDetail);