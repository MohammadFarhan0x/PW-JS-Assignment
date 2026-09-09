// 15. Find an Index Using findIndex()
// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".


let arr = [
    {
        name: "Rahul",
        age: 20
    },
    {
        name: "Priya",
        age: 22
    }

]

let res = arr.findIndex((value) => {
    return value.name === "Rahul"
})

console.log(res);