const password = document.querySelector("#password")

const confirmPassword = document.querySelector("#confirm-password")
const btn = document.querySelector("#btn")

btn.disabled = true

confirmPassword.addEventListener('input' , ()=>{
    if(password.value == confirmPassword.value) {
        console.log("matched")
        btn.disabled = false
    }else{
        console.log("not-matched")
        btn.disabled = true
    }
})
