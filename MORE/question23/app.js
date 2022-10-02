const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const showMsg =document.querySelector(".show-msg")
const btn = document.querySelector(".btn")
// confirmPassword.addEventListener('input' , ()=>{
//     if(confirmPassword.value != password.value) {
//         showMsg.innerText = "Password mismatched"
//     }else{
//         showMsg.innerText = "Password matched successfully"
//     }
// })

btn.addEventListener('click',()=>{
    if(confirmPassword.value != password.value) {
        showMsg.innerText = "Password mismatched"
    }else{
        showMsg.innerText = "Password matched successfully"
    }
})