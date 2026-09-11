// Create an array of user objects containing name and email. Use map() to create a new array containing only the names.

let users = [
    {
        name: "Rahul",
        email: "rahul@example.com"
    },
    {
        name: "Priya",
        email: "priya@example.com"
    }
]

let userName = users.map(({name}) => {
    return name
})
console.log(userName);
