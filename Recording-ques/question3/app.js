const btn = document.querySelector("#btn")
const showMsg = document.querySelector("#show-msg")
const listOfItems = ["a","b","c","d","e","f"]
btn.addEventListener('click', ()=>{
    var randomNumber = Math.floor(Math.random() * listOfItems.length)
        console.log(randomNumber)
   var randomWords = listOfItems[randomNumber]
   showMsg.innerText = randomWords

})