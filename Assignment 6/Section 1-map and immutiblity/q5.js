// Create an array of user objects with name and role. Use map() and the spread operator to create a new  array where the role of every user is changed to "developer" without modifying the original array.

let users = [
    {
        name: "Rahul",
        role: "Student"
    },
    {
        name: "Priya",
        role: "Student"
    }
]

let updatedDetails = users.map((user) => {
    user.role = "Developer"
    return user
    
})

console.log(updatedDetails);