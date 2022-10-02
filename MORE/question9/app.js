const inputNum = document.querySelector('#input-num')
const guessBtn = document.querySelector('#btn')
const ShowOutput = document.querySelector('.show-output')

guessBtn.addEventListener('click', ()=>{
    var inputValue = Number(inputNum.value)
    var randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber)
    if(inputValue <= 10){
        if(inputValue == randomNumber){
            ShowOutput.innerText = "yay you guess is right"
        } else{
            ShowOutput.innerText = "yay you guess is wrong"
        }
    }else{
        ShowOutput.innerText = "please enter num between 1 to 10"
    }
    
})