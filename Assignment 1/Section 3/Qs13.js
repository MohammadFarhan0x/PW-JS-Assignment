
// Take a student’s percentage.
// Assign a grade:
// 90–100 → A
// 80–89  → B 
// 70–79  → C 
// 60–69  → D 
// 40–59  → E 
// Below 40 → F 
// Also check for invalid percentages below 0 or above 100.

let percentage = 56;
if(percentage >= 0 && percentage <= 100){
    if(percentage >= 90 && percentage <= 100){
        console.log("Grade A");
    } else if(percentage >= 80 && percentage <= 89){
        console.log("Grade B");
    } else if(percentage >= 70 && percentage <= 79){
        console.log("Grade C");
    } else if(percentage >= 60 && percentage <= 69){
        console.log("Grade D");
    } else if(percentage >= 40 && percentage <= 59){
        console.log("Grade E");
    } else if(percentage < 40){
        console.log("Grade F");
    }
} else {
    console.log("Invalid percentage");
}