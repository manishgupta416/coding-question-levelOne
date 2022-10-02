const darkModeBtn = document.querySelector('#dark-mode')
const whiteModeBtn = document.querySelector('#white-mode')

darkModeBtn.addEventListener('click' , ()=>{
    document.body.style.backgroundColor = "black";
})

whiteModeBtn.addEventListener('click' , ()=>{
    document.body.style.backgroundColor = "white";
})