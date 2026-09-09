// Create a settings object and use Object.entries() to convert its properties into key-value pairs.

let setting = {
    theme: "Dark",
    language: "English",
    Notification: true
}
let res = Object.entries(setting)
console.log(res);