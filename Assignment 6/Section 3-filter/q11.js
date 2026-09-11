// Create an array of user objects containing name and role. Use filter() to get all users whose role is "developer".

let users = [
    {
        name: "Rahul",
        role: "developer"
    },
    {
        name: "Priya",
        role: "student"
    }
]

let developerUser = users.filter((user) => {
    return user.role === "developer"
})

console.log(developerUser);