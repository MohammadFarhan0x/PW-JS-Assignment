// Create an array of names and use map() to add the text "User: " before every name. Display the new array.

let names = ["Rahul", "Priya", "Aman", "Anshu"]

let updatedNames = names.map((name) => {
    return `user: ${name}`
})

console.log(updatedNames);

