// Create variables for:
// studentName
// rollNumber
// mathMarks
// scienceMarks
// englishMarks
// Calculate:
// ● Total marks
// ● Percentage
// ● Grade
// ● Pass/Fail
// Rules:
// Pass/Fail
// The student must score at least 40 in every subject

// Grade
// 90–100 → A
// 80–89  → B
// 70–79  → C
// 60–69  → D
// 40–59  → E
// Below 40 → F
// Display a result like:
//  -------------------------
//       STUDENT RESULT
//  -------------------------
// Name       : Rahul
// Roll No    : 101
// Math       : 85
// Science    : 78
// English    : 92
// Total      : 255
// Percentage : 85%
// Grade      : B
//Result      : PASS
//  -------------------------



let studentName = "Mohammad Farhan";
let rollNumber = 2256792335;
let mathMarks = 82;
let scienceMarks = 83;
let englishMarks = 79;
let total = scienceMarks + mathMarks + englishMarks; 
let percentage = ((total/300) * 100);
console.log("----------------------------");
console.log(`       STUDENT RESULT       `);
console.log("----------------------------");
console.log('');
console.log("Name       :", studentName);
console.log("Roll No    :", rollNumber);

console.log('');

if(mathMarks >= 40){
    console.log("Maths      :", mathMarks);
} else {
    console.log("Fail");
}
if(scienceMarks >= 40){
    console.log("Science    :", scienceMarks);
} else{
    console.log("Fail");    
}
if(englishMarks >= 40){
    console.log("English    :", englishMarks);
} else{
    console.log("Fail");
}

console.log('');

console.log("Total      :", total);
console.log("Percentage :", percentage);
if(percentage < 40){
    console.log("Garde      : F", );
} else if(percentage >= 40 && percentage <= 59){
    console.log("Grade      : E");
} else if(percentage >= 60 && percentage <= 69){
    console.log("Grade      : D");
} else if(percentage >= 70 && percentage <= 79){
    console.log("Grade      : C");
} else if(percentage >= 80 && percentage <= 89){
    console.log("Grade      : B");
} else if(percentage >= 90 && percentage <= 100){
    console.log("Grade      : A");
} 
if(mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40){
    console.log("Result     : PASS");
} else{
    console.log("Result     : FAIL");
}
console.log("----------------------------");
