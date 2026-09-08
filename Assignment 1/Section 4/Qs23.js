
// Take a traffic signal color:
// "red"
// "yellow"
// "green"
// Use switch-case.
// Display: 
// red    
// → Stop 
// yellow → Wait 
// green  → Go 
// For any other value: 
// Invalid signal 

let color = "green";

switch (color) {
    case "red":
        console.log("Ruko zara sabar karo");
        break;
    case "yellow":
        console.log("A gadi start kar");
        break;
    case "green":
        console.log("Chala jaaa b$dk");
        break;
    default:
        console.log("Chalbe side hat");
}