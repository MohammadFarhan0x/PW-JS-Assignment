
//Take three numbers and find the largest number using if-else. Do not use arrays or any built-in maximum function.


let num1 = 22;
let num2 = 114;
let num3 = 88;
if(num1 > num2){
    if(num1 > num3){
        console.log(num1," is greater");
    } else{
        console.log(num3," is greater");
    }
} else{
    if(num2 > num3){
        console.log(num2," is greater");
    }  else{
        console.log(num3," is greater");
    }
}