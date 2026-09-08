// Create: 
// username 
// password 
// Correct credentials: 
// username = "admin" 
// password = "12345" 
// If both are correct: 
// Login successful 
// Otherwise: 
// Invalid username or password 
// Use the logical && operator. 

let username = "admin";
let password = "12345";
if(username === "admin" && password === "12345"){
    console.log("Login Successful");
} else {
    console.log("Invalid username or password");
}