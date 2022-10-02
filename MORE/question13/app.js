const inputTxt = document.querySelector("#input-txt")
const logBtn = document.querySelector("#log")
const warnBtn = document.querySelector("#warn")
const errorBtn = document.querySelector("#error")

const showOutput = document.querySelector("#show-output")


logBtn.addEventListener('click', ()=>{
    showOutput.innerText = inputTxt.value
    showOutput.style.color ="black"
})
warnBtn.addEventListener('click', ()=>{
   
    showOutput.innerText = inputTxt.value
    showOutput.style.color ="yellow"
})
errorBtn.addEventListener('click', ()=>{
    showOutput.innerText = inputTxt.value
    showOutput.style.color ="red"
})