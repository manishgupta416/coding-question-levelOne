const inputTxt = document.querySelector("#input-txt")
const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const showOutput = document.querySelector("#show-output")
const showBtn = document.querySelector("#show-txt")
console.log(showOutput)

var fontSize= 40

showBtn.addEventListener('click' , ()=>{
    showOutput.innerText= inputTxt.value
})

plusBtn.addEventListener('click', ()=>{
   
    fontSize= fontSize +2
    showOutput.style.fontSize = fontSize+"px"
    
})

minusBtn.addEventListener('click', ()=>{
    fontSize= fontSize - 2
    showOutput.style.fontSize = fontSize+"px"
})