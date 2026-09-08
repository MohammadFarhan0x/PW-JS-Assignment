
// Take marks of three subjects. 
// A student passes only when they score 
// 40 or more in every subject.
// If the student passes, calculate the average and display: 
// Average >= 75 → Distinction 
// Average >= 60 → First Division 
// Average >= 50 → Second Division 
// Otherwise → Pass 
// If any subject is below 40: 
// Result: Fail 

let maths = 82;
let physics = 78;
let chemistry = 88;

if (maths >= 40 && physics >= 40 && chemistry >= 40) {
    console.log("You passed the exam");
    average = (maths + physics + chemistry) / 3;
    console.log("Your average marks is", average)
    if (average >= 75) {
        console.log("distinction");
    } else if (average >= 60) {
        console.log("First Division");
    } else if (Average >= 50) {
        console.log("Second Division");
    } else {
        console.log("pass");
    }
} else {
    console.log("You fucked up");
}