// Create a function named displayUser that receives a user object. Use object destructuring in the function  parameters to access and display name and email.

function displayUser({ name,email}) {
    console.log(name);
    console.log(email);
}

let user = {
    name: "rahul",
    email: "rahul@example.com"
}

displayUser(user)
