// Create a user object containing name and role. Use the spread operator to create a new object and update the role to "developer".

let user = {
    name: "Rahul",
    email: "rahul@emaple.com"
}

let {email, ...userDetail } = user
userDetail.role = "developer"
console.log(userDetail);