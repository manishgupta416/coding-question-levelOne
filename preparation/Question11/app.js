const checkBtn = document.querySelector('#check')
const password = document.querySelector("#password")
const value = password.length
const showOtput = document.querySelector("#show-output")
// checkBtn.addEventListener('click', ()=>{
//   if(password.value.length < 10) {
//     showOtput.innerHTML = "password must be greater than 10 chars"
//   }else{
//     showOtput.innerHTML = "success"
//   }
// })


// 2nd way
checkBtn.disabled = true
password.addEventListener('input', ()=>{
  if(password.value.length < 10) {
        showOtput.innerHTML = "password must be greater than 10 chars"
      }else{
        showOtput.innerHTML = "success"
        checkBtn.disabled = false
      }
})