const inputTxt = document.querySelector('#input-txt')
const showBtn = document.querySelector('#btn2')
const showOutput = document.querySelector('#show-output')
//IMportant
// showOutput.innerText = counter
inputTxt.addEventListener('input', ()=>{
    var counter = 30
    showOutput.innerText = counter
   counter = counter - inputTxt.value.length
   console.log(counter)
   showOutput.innerText = counter
   showBtn.disabled = false
   if(counter == 15 && counter > 0 ){
    showOutput.style.color = 'yellow'
    showBtn.disabled = false
   } else if (counter<=0){
    showOutput.style.color = 'red'
    showBtn.disabled = true
   }else{
    
   }

})

showBtn.addEventListener('click' , ()=>{
    showOutput.innerText = inputTxt.value
})
