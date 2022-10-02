const inputName = document.querySelector("#input-name")
const inputPassword = document.querySelector("#input-password")
const btn= document.querySelector("#btn")

btn.addEventListener('click' , ()=>{
    if(inputPassword.value.includes(inputName.value)){
        console.log("Password can't have name")
    }else{
        console.log("success")
    }
})
