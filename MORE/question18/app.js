const highlightBtn = document.querySelector("#highlight-btn")
const inputTxt =document.querySelector("#input-txt")
var sentence = inputTxt.innerText
console.log(sentence)

highlightBtn.addEventListener('click',()=>{
  
   var word = sentence.split(" ");
   console.log(word)
   for (let i = 0; i < word.length; i++) {
    console.log(word[1].lenght)
    if(word[i].lenght > word[i+1]){
        console.log(word[i])
    }
    
   }
    inputTxt.style.color="tomato"
})