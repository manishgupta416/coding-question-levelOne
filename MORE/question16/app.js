const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const operator = document.querySelector("#operator")
const showOutput = document.querySelector("#show-msg")
const checkBtn = document.querySelector("#btn")

checkBtn.addEventListener('click',()=>{
    console.log("click")
    if(operator.value=="+"){
        var result = Number(input1.value) +  Number(input2.value)
        console.log(result)
        showOutput.innerText = "sum =" + result
    }else if(operator.value=="-"){
        var result = Number(input1.value) -  Number(input2.value)
        showOutput.innerText = "difference =" + result
    }else if(operator.value=="*"){
        var result = Number(input1.value) *  Number(input2.value)
        showOutput.innerText = "multiply =" + result
    }
    else if(operator.value=="/"){
        var result = Number(input1.value) /  Number(input2.value)
        showOutput.innerText = "divide =" + result
    } else{
        showOutput.innerText = "sorry we cant perform this operation"
    }
})