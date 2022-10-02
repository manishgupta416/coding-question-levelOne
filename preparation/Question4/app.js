const inputTxt = document.querySelector("#input-text")
const redBtn = document.querySelector("#red")
const greenBtn = document.querySelector("#green")
const blueBtn = document.querySelector("#blue")
const showTxt = document.querySelector("#show-txt")
const showOutput = document.querySelector("#show-output")

// showTxt.addEventListener('click' , ()=>{
//     showOutput.innerText = inputTxt.value
// })

// redBtn.addEventListener('click' , ()=>{
//     console.log("red")
//     showOutput.style.color ="red"
// })

// blueBtn.addEventListener('click' , ()=>{
//     showOutput.style.color ="blue"
// })

// greenBtn.addEventListener('click' , ()=>{
//     showOutput.style.color ="green"
// })


// 2nd way IMPORTANT

redBtn.addEventListener('click' , ()=>{
    console.log("red")
    inputTxt.style.color ="red"
})