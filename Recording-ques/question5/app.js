const headingTxt = document.querySelector("#heading")
const fivePxBtn = document.querySelector("#five")
const tenPxBtn = document.querySelector("#ten")

fivePxBtn.addEventListener('click', ()=>{
    headingTxt.style.border = "5px solid yellow"
    headingTxt.style.color = "red"
})

tenPxBtn.addEventListener('click', ()=>{
    headingTxt.style.border = "10px solid blue"
})