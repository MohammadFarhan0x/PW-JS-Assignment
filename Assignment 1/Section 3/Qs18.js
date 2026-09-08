// Take a person’s age.
// Display:
// 0–12
// → Child
// 13–19  → Teenager
// 20–59  → Adult
// 60+
// → Senior Citizen 
// Also handle invalid negative ages. 

const age =69;
if(age < 0){
    console.log("Doesn't Exist");

} else if(age <= 12){
    console.log("Child");

} else if(age <= 19){
    console.log("Teenager");

} else if(age <= 59){
    console.log("Adult");

} else {
    console.log("Senior Citizen");
}