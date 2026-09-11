// Create an array of frontend technologies and use reduce() to combine them into a single comma-separated string .

let frontendTech = ["HTML", "CSS", "JavaScripts"]

let res = frontendTech.reduce((acc, curr) => {
   
    return acc + "," + curr
})

console.log(res);