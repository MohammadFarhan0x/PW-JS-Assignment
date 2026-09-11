// Create an array of users containing name and isActive. Use filter() to get only the active users.

let users = [
    {
        name: "Rahul",
        isActive: true
    },
    {
        name: "Priya",
        isActive: false
    },
    {
        name: "Ansh",
        isActive: true
    }
]

let activeUser = users.filter((user) => {
    if (user.isActive === true) {
        return user
    }
})

console.log(activeUser);