// Take a number. 
// Determine all applicable information: 
// ● Whether it is positive, negative or zero 
// ● Whether it is even or odd 
// ● Whether it is greater than 100, less than 100, or equal to 100 
// Example: 
// Input: 150 
// Output: 
// Positive 
// Even 
// Greater than 100 

let num = 139;

if(num === 0){
    console.log( num, "is Neither positive nor negative.");
    console.log("We considered", num , "as Even.");
    console.log(num , "is less than 100");
} else if(num > 0){
    console.log(num, "is a positive number.");

    if(num % 2 === 0){
        console.log(num," is Even.");        
    } else{
        console.log(num," is Odd.");
    }

    if(num === 100){
        console.log(num, " is equal to 100.");
    } else{
        if(num > 100){
            console.log(num, " is Greater than 100.");
        } else{
            console.log(num, "is Less than 100.");
        }
    }
} else{
    console.log(num," is a Negative number.");
    
    if(num % 2 === 0){
        console.log(num," is Even.");        
    } else{
        console.log(num," is Odd.");
    }

    if(num === 100){
        console.log(num, " is equal to 100.");
    } else{
        if(num > 100){
            console.log(num, " is Greater than 100.");
        } else{
            console.log(num, "is Less than 100.");
        }
    }
}