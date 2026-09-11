// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".

let emailAdresses = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

let gmail = emailAdresses.filter((user) => {
    if (user.includes("@gmail.com")) {
        return user
    }
})
console.log(gmail);