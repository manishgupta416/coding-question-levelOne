const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const showMsg = document.querySelector("#show-msg")
const btn = document.querySelector("#check")
btn.addEventListener('click', ()=>{
    if(Number(input1.value) > Number(input2.value)) {
        input1.style.backgroundColor = "red"
        showMsg.innerText = `Highest number b/w ${input1.value}&& ${input2.value} is ${input1.value}`
        showMsg.style.color= 'red'
    }else{
        showMsg.innerText = `Highest number b/w ${input1.value} && ${input2.value} is ${input2.value}`
        showMsg.style.color= 'yellow'
        input1.style.backgroundColor = "yellow"
    }
})


