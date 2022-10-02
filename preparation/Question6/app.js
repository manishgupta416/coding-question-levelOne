const txt = document.querySelector("#txt")
const btn = document.querySelector("#btn-loaded")

btn.addEventListener('click' , () =>{
  console.log("working fine")
  console.log(txt)
  txt.style.display = 'none'
})