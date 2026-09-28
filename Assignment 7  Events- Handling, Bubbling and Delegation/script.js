

//                          ---------- Section 1 - Event Handling Basics ----------

//  q1: Create a button and use addEventListener() to display a message when the button is clicked.

// const btn = document.querySelector("#btn")
// const h1 = document.querySelector("#h1")

// btn.addEventListener('click', (e) => {
//     h1.textContent = "Hello Every One"
// })


//  q2: Create a paragraph and a button. Use addEventListener() to change the paragraph text when the button is clicked.

// const btn = document.querySelector("#btn")
// const p = document.querySelector("#paragraph")

// p.textContent = "Hello my name is Mohammad Farhan."

// btn.addEventListener('click', (e) => {
//     p.textContent = "I am learning web development by Nishant sir."
// })



//  q3: Create a heading and use addEventListener() with the mouseover event to change its text when the mouse moves over it.

// const h1 = document.querySelector("#h1")

// h1.textContent = "Hello EveryOne"

// h1.addEventListener('mouseover', (e) => {
//     h1.textContent = "Kaise ho aap log"
// })



//                          ---------- Section 2 - Event Object ----------



//  q4: Create a button and use the event object to identify the element that was clicked.

// const btn = document.querySelector("#btn")
// const p = document.querySelector("#paragraph")

// btn.addEventListener('click', (e) => {
//    p.append(e.target.tagName)
// })

//  q5: Create a <div> and use a mousemove event to display the mouse coordinates using the event object's clientX and clientY properties.


// const btn = document.querySelector("#btn")
// const div = document.querySelector("#style")
// const p = document.querySelector("#p")

// btn.addEventListener('click', (e) => {
//    div.classList.remove("hidden")
// })

// div.addEventListener('click', (e) => {
//     p.append(` X: ${e.clientX} , Y: ${e.clientY} ,`)
// })


//  q6: Create an input field and use the event object's target.value to display the entered value.

// const input = document.querySelector("input")
// const print = document.querySelector("#input")

// input.addEventListener('blur', (e) => {
//     print.append(` You typed: ${e.target.value}`)
// })




//                          ---------- Section 3 - Removing and Controlling Events ----------



//  q7: Create a button and attach a click event using addEventListener(). Create a separate function and use removeEventListener() to stop the click event when required.

// const btn = document.querySelector("#btn")
// const p = document.querySelector("#paragraph")

// let counter = 1;

// function fun() {
//     if (counter <= 5) {
//         p.append(`Button Clicked - ${counter}   `)
//         counter++
//     } else {
//         btn.removeEventListener('click', fun)
//     }
// }

// btn.addEventListener('click', fun)


// q8: Create a button and use addEventListener() with the once option so that the event runs only the first time the button is clicked.


// const btn = document.querySelector("#btn")
// const p = document.querySelector("#paragraph")

// btn.addEventListener('click', (e) => {
//     p.append("Welcome!")
// }, { once: true })


// q9: Create a parent <div> containing a button. Add click events to both parent and button. Use stopPropagation() so that clicking the button does not trigger the parent's click event.


// const outter = document.querySelector("#outter")
// const inner = document.querySelector("#inner")
// const btn2 = document.querySelector("#btn2")
// const p = document.querySelector("#msg")

// outter.addEventListener('click', (e) => {
//     e.stopPropagation()
//     p.append("outter     ")
// })

// inner.addEventListener('click', (e) => {
//     e.stopPropagation()
//     p.append("   Inner      ")
// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()
//     p.append("   button      ")
// })



//                          ---------- Section 4 - Bubbling, Capturing & Default Actions ----------



// q10: Create a parent <div> containing a child <button>. Add click events to both elements and observe the order in which the events execute when the button is clicked.


// const div = document.querySelector("#parent")
// const btn = document.querySelector("#child-btn")
// const p = document.querySelector("#sibling")

// div.addEventListener('click', (e) => {
//     p.append("Parent-clicked")
// })

// btn.addEventListener('click', (e) => {
//     p.append("Button-clicked ")
// })


// q11: Create a parent <div> containing a button. Add click event listeners to both using the capturing phase and observe the order in which the events execute.

// const div = document.querySelector("#parent")
// const btn = document.querySelector("#child-btn")
// const p = document.querySelector("#sibling")

// div.addEventListener('click', (e) => {
//     p.append("Parent-clicked ")
// }, { capture: true })

// btn.addEventListener('click', (e) => {
//     p.append("Button-clicked ")

// }, { capture: true })


//                          ---------- Section 5 - Event Delegation ----------


// q12: Create multiple buttons inside a parent <div>. Add only one event listener to the parent and use event delegation to identify which button was clicked.

// const div = document.querySelector("#buttons")
// const p = document.querySelector("#print")

// div.addEventListener('click', (e) => {
//     if (e.target.tagName === "BUTTON") {
//         let text = e.target.textContent
//         p.textContent = `${text} button clicked`
        
//    }
// })



// q13: Create a list of items and add one event listener to the <ul>. Use event delegation to display the text of the clicked list item.

// const skills = document.querySelector("#skills")
// const p = document.querySelector("#output")

// skills.addEventListener('click', (e) => {
//     if (e.target.tagName === "LI") {
//         p.textContent = `You Clicked: ${e.target.innerText} `
//     }
// })
