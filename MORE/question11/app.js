const text = document.querySelector('#text')
const rightBTn = document.querySelector('#right')
const leftBtn = document.querySelector('#left')
const centerBtn = document.querySelector('#center')

rightBTn.addEventListener('click' , ()=>{
    text.style.textAlign = 'right'
})

leftBtn.addEventListener('click' , ()=>{
    text.style.textAlign = 'left'
})

centerBtn.addEventListener('click' , ()=>{
    text.style.textAlign = 'center'
})