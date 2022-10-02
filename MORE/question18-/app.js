const inputDate = document.querySelector("#input-date")
const btn = document.querySelector("#btn")
const showMsg = document.querySelector("#show-output")

btn.addEventListener('click' , ()=>{
    console.log((inputDate.value))
    var birthYear = inputDate.value.split("-")
    console.log(birthYear[0])
    const d = new Date();
    var currentYear = d.getFullYear()
    console.log(currentYear)
    var diffrence = parseInt(currentYear)-parseInt(birthYear)
    console.log(diffrence)
    
if(parseInt(currentYear)< parseInt(birthYear)){
    showMsg.innerText = "Don't enter future date."
}else{
    if(diffrence > 18 ){
        showMsg.innerText = "You can drive."
    }else if(diffrence <18){
        showMsg.innerText = "You cannot drive."
    }
}
 
})