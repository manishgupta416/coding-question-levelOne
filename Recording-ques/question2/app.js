const inputTxt = document.querySelector("#input-txt")
const fetchBtn = document.querySelector("#api-call")
const showMsg = document.querySelector(".show-msg")
const guessTxt = document.querySelector("#guess-input")

const validateBtn = document.querySelector(".validate")
var serverUrl = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="


function getName (name){
    return serverUrl + name
}

fetchBtn.addEventListener('click', ()=>{
    var data = ''
    fetch(getName(inputTxt.value))
    .then(res => res.json())
    .then(data =>{
        showMsg.innerText = data.otp
        data = data.otp
        // console.log(data)
    } )
    console.log(data)
    validateBtn.addEventListener('click', ()=>{
        // console.log(data)
        // console.log(guessTxt.value)
        if(guessTxt.value == showMsg.innerText) {
            console.log("yay you guess right")
        }else{
            console.log("wrong")
        }
    })
})

