const apiCall = document.querySelector("#api-call")
const inputTxt = document.querySelector("#input-txt")
console.log(inputTxt)
const showOutput = document.querySelector(".show-output")
const addTxt = document.querySelector(".add-txt")
console.log(addTxt)
const add = document.querySelector("#add")
const appendBtn = document.querySelector("#append-btn")
var responseData ='' // to store what i get in my response
const capitalizedBtn = document.querySelector("#capitalized")
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTextFromUser (text) {
  return serverUrl+"?" + "text="+ text
}

apiCall.addEventListener('click' , ()=>{
  fetch(getTextFromUser(inputTxt.value))
  .then(response  => response.json())
  // .then(json => console.log(json.contents.text))
  .then(json =>{responseData=json.contents.text
    showOutput.innerText =responseData } )
  
})
appendBtn.addEventListener('click', ()=>{
  showOutput.innerText = responseData + add.value
})
capitalizedBtn.addEventListener("click" , ()=>{
  showOutput.style.textTransform = "capitalize";
})

