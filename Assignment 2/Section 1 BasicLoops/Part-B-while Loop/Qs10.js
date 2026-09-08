// Print numbers from 1 to 10, but skip the number 5 using the continue statement.

let num = 10;
let i = 1;
while (i <= num) {    
    if (i === 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

