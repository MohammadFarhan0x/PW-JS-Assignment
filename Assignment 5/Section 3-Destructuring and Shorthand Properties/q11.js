// Create a user object containing name, email, and role. Use object destructuring to extract name and  email into separate variables.

let user = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
}


let { role, ...info } = user



Object.values(info).forEach((value) => {
    console.log(value);
})

