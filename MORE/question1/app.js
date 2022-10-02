const inputTxt = document.querySelector("#input-txt")
const reverseBtn =document.querySelector("#reverse-btn")
const showOutput = document.querySelector("#show-output")

inputTxt.addEventListener('input' , ()=>{
   var reversedString = (inputTxt.value).split('').reverse().join('')
   showOutput.innerText = reversedString
})