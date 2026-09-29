//                      --------------------- Section 1 – Form and Input Events ---------------------


//  q1: Create a simple form with a name input and submit button. Use the submit event to display a message when the form is submitted.

// const form = document.querySelector("form")
// const username = document.querySelector("#name")
// const error = document.querySelector("#error-message")
// const btn = document.querySelector("#btn")

// function showError(input, errorMeassage) {
//     input.parentElement.querySelector("#error-message").textContent = errorMeassage
// }


// function clearError(input) {
//     input.parentElement.querySelector("#error-message").textContent = ""
// }


// function validUsername(username) {
//     if (username.value.trim().length === 0) {
//         showError(username, "please enter a valid username")
//         return false
//     }

//     if (username.value.trim().length < 2) {
//         showError(username, "Username must be atleast 3 character")
//         return false
//     }

//     clearError(username)
//     return true

// }


// form.addEventListener('submit', (e) => {

//     e.preventDefault()

//     const isValidUsername = validUsername(username)

//     if (isValidUsername) {
//         document.querySelector("#greet").classList.remove("hidden")
//     } else {
//         document.querySelector("#greet").classList.add("hidden")
//     }
// })


//  q2: Create a form with a submit button and use preventDefault() inside the submit event to stop the page from refreshing


// const form = document.querySelector("form")
// const username = document.querySelector("#name")
// const btn = document.querySelector("#btn")


// form.addEventListener('submit', (e) => {
//     e.preventDefault()

// })


//  q3: Create an input field and use the input event to display the value entered by the user in a paragraph.

// const form = document.querySelector("form")
// const username = document.querySelector("#name")
// const btn = document.querySelector("#btn")
// const p = document.createElement("p")
// form.append(p)

// form.addEventListener('input', (e) => {
//     e.preventDefault()
//     if (username.value.length === 0) {
//         p.textContent = "Please Enter Your subject"
//     } else {
//         p.innerText = `You entered : ${username.value} `
//     }
// })


//  q4: Create a <select> dropdown containing three programming languages. Use the change event to display the selected language.

// const form = document.querySelector("form")
// const lang = document.querySelector("#language")
// const p = document.createElement("p")
// form.append(p)

// form.addEventListener('change' , (e) => {
//     p.innerText = `Selected Language: ${lang.value}`
// })



//  q5: Create an input field and use the focus event to change its border or background color when the user clicks inside it.


// const form = document.querySelector("form")
// const username = document.querySelector("#name")

// username.addEventListener("focus", (e) => {
//     username.style.backgroundColor = "lightyellow"
//     username.style.border = "2px solid purple"
//     username.style.outline = "none"
// })

// username.addEventListener("blur", (e) => {
//     username.style.backgroundColor = "white"
//     username.style.border = "1px solid black"
//     username.style.outline = "none"
// })


//  q6: Create an input field and use the blur event to display a message when the user moves away from the input field.


// const form = document.querySelector("form")
// const username = document.querySelector("#name")
// const p = document.createElement('p')
// form.append(p) 

// username.addEventListener('blur', (e) => {
//     p.innerText = "You left the input field"
// })

// username.addEventListener('focus', (e) => {
//     p.innerText = ""
// })





//                      --------------------- Section 2 – Basic Form Validation ---------------------



//  q7: Create a form with a name input. When the form is submitted, check whether the name field is empty. Display an error message if it is empty.


// const form = document.querySelector("form")
// const username = document.querySelector("#name")
// const btn = document.querySelector("#btn")




// function showError(input, errorMessage) {
//     input.parentElement.querySelector("#output").textContent = errorMessage
// }


// function clearError(input) {
//     input.parentElement.querySelector("#output").textContent = ""
// }


// function validUsername(username) {
//     if (username.value.trim().length === 0) {
//         showError(username, "Name Required")
//         return false
//     }   

//     clearError(username)
//     return true

// }


// form.addEventListener('submit', (e) => {

//     e.preventDefault()

//     validUsername(username)


// })




//  q8: Create a form with an email input and check whether the email field is empty during form submission. Display an appropriate message if no email is entered.



// const form = document.querySelector("form")
// const email = document.querySelector("#email")
// const btn = document.querySelector("#btn")




// function showError(input, errorMessage) {
//     input.parentElement.querySelector("#output").textContent = errorMessage
// }


// function clearError(input) {
//     input.parentElement.querySelector("#output").textContent = ""
// }


// function validEmail(email) {
//     if (email.value.trim().length === 0) {
//         showError(email, "email Required")
//         return false
//     }

//     clearError(email)
//     return true

// }


// form.addEventListener('submit', (e) => {

//     e.preventDefault()

//     validEmail(email)


// })


//  q9: Create a password field and validate that the password contains at least 6 characters.


// const form = document.querySelector("form")
// const password = document.querySelector("#password")
// const btn = document.querySelector("#btn")




// function showError(input, errorMessage) {
//     input.parentElement.querySelector("#output").textContent = errorMessage
// }


// function clearError(input) {
//     input.parentElement.querySelector("#output").textContent = ""
// }


// function validPassword(password) {
//     if (password.value.trim().length === 0) {
//         showError(password, "password Required")
//         return false
//     }

//     if (password.value.trim().length < 6) {
//         showError(password, "password must be atleast 6 character")
//         return false
//     }

//     clearError(password)
//     return true

// }


// form.addEventListener('submit', (e) => {

//     e.preventDefault()

//     validPassword(password)


// })



//  q10: Create a form containing name, email, and password fields. On submission, check whether any of the fields are empty and display an appropriate error message.



// const form = document.querySelector("form")
// const username = document.querySelector("#name")
// const email = document.querySelector("#email")
// const password = document.querySelector("#password")
// const btn = document.querySelector("#btn")




// function showError(input, errorMessage) {
//     input.parentElement.querySelector("#output").textContent = errorMessage
// }


// function clearError(input) {
//     input.parentElement.querySelector("#output").textContent = ""
// }


// function validUsername(username) {
//     if (username.value.trim().length === 0) {
//         showError(username, "Name Required")
//         return false
//     }   

//     clearError(username)
//     return true

// }

// function validEmail(email) {
//     if (email.value.trim().length === 0) {
//         showError(email, "email Required")
//         return false
//     }

//     clearError(email)
//     return true

// }


// function validPassword(password) {
//     if (password.value.trim().length === 0) {
//         showError(password, "password Required")
//         return false
//     }

//     if (password.value.trim().length < 6) {
//         showError(password, "password must be atleast 6 character")
//         return false
//     }

//     clearError(password)
//     return true

// }


// form.addEventListener('submit', (e) => {

//     e.preventDefault()

//     validUsername(username)
//     validEmail(email)
//     validPassword(password)


// })