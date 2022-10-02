const increaseBtn = document.querySelector("#increase")
const decreaseBtn = document.querySelector("#decrease")
const txt = document.querySelector("#text")
var fontSize = 16 // best to declare if you are getting not desired style values
increaseBtn.addEventListener('click' ,()=>{
    fontSize = fontSize+ 4
    
    txt.style.fontSize = fontSize+"px"
    if((fontSize % 5) == 0){
        txt.style.color = 'red'
    } else{
        txt.style.color = 'black'
    }
})

decreaseBtn.addEventListener('click' ,()=>{
    fontSize = fontSize - 4
    
    txt.style.fontSize = fontSize+"px"
    if((fontSize % 5) == 0){
        txt.style.color = 'red'
    }else{
        txt.style.color = 'black'
    }
})