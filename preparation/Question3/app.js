const inputTxt = document.querySelector('#input-txt')
const h1Btn = document.querySelector("#h1")
const h2Btn = document.querySelector("#h2")
const h3Btn = document.querySelector("#h3")
const showTxt = document.querySelector("#show-txt")
const showOutput = document.querySelector("#show-output")

showTxt.addEventListener('click' ,() =>{
    showOutput.innerText = inputTxt.value
})

h1Btn.addEventListener('click' , ()=>{
    showOutput.innerHTML = `<h1>${inputTxt.value}</h1>`
 
})

h2Btn.addEventListener('click' , ()=>{
    showOutput.innerHTML = `<h2>${inputTxt.value}</h2>`
})

h3Btn.addEventListener('click' , ()=>{
    showOutput.innerHTML = `<h3>${inputTxt.value}</h3>`
})
