// 14. Find an Object Using find()
// Create an array of user objects containing name and age. Use find() to get the user whose name is
// "Rahul".

let users = [
    {
        name: "Rahul",
        age:20
    },
    {
        name: "Priya",
        age: 22,
    }
]

let name = users.find((user) => {
    return user.name === "Rahul"
})
console.log(name);

