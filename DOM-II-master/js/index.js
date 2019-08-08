// Your code goes here
const navbuttons = document.querySelectorAll(".main-navigation .nav-link")
navbuttons[1].addEventListener("mouseover", () => {
    console.log("About Us is being moused over!")
    alert("THAT IS THE ABOUT US BUTTON!")
})

navbuttons.forEach(navbutton => {
    navbutton.addEventListener("click", () => {
        navbutton.style.backgroundColor = "red"
        event.stopPropagation();
        event.preventDefault();
        console.log("No links for you!")
    })
})

const header = document.querySelector(".main-navigation")
header. addEventListener("click", () => {
    console.log("I'm being clicked!")
    header.style.backgroundColor = "blue"
})

window.addEventListener("resize", (event) => {
    alert("Please do not resize this window!")
})

let bodyE = document.querySelector("body")
bodyE.addEventListener("keydown", (event) => {
    bodyE.style.backgroundColor = "aqua"
})

bodyE.addEventListener("keyup", (event) => {
    bodyE.style.backgroundColor = "white"
})

bodyE.addEventListener("wheel", (event) => {
    bodyE.style.backgroundColor = "yellow"
})

const formModify = document.querySelector("#form")
formModify.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "dodgerblue"
    console.log("Focus!")
}, true)

formModify.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = ""
    console.log("Blur!")
}, true)

// const bodyRemove = document.querySelector("body")
// bodyRemove.addEventListener("scroll", (event) => {
//     const contentRemove = document.getElementsByClassName("content-section")
//     console.log("Hello!")
// })

const destinationFontUpgrade = document.querySelectorAll(".destination")
destinationFontUpgrade.forEach(dFontUp => {
    dFontUp.addEventListener("dblclick", () => {
        const h4 = document.querySelectorAll(".destination h4")
        h4.forEach(h4 => {
            h4.style.fontSize = "5rem"
        })
    })
})

const destinationButton = document.querySelectorAll(".destination .btn")
destinationButton.forEach(dButton => {
    dButton.addEventListener("dblclick", () => {
        dButton.style.backgroundColor = "orange"
        event.stopPropagation();
    })
})

// document.addEventListener("dragstart", (event) => {
//     console.log("drag starting")
//     event.dataTransfer.setData("Text", event.target.id)
// })

// document.addEventListener("dragover", (event) => {
//     event.preventDefault();
// })

// document.addEventListener("drop", (event) => {
//     event.preventDefault();
//     if(event.target.className === "droptarget") {
//         let data = event.dataTransfer.getData("Text")
//         event.target.appendChild(document.getElementById(data))
//     }
// })

const badImg = document.querySelector(".content-destination img")
badImg.addEventListener("mouseenter", () => {
    badImg.style.visibility = "hidden"
})
badImg.addEventListener("mouseleave", () => {
    badImg.style.visibility = "visible"
})