// Using the same array of frontend technologies, use map() to create a new array where every technology  is converted to uppercase.

let frontendTech = ["HTML", "CSS", "JavaScripts", "Reacts"]

let upperCase = frontendTech.map((tech) => {
    return tech.toUpperCase()
})

console.log(upperCase);