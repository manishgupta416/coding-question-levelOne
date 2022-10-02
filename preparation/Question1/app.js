const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btnPlus = document.querySelector('#plus')
const btnMinus = document.querySelector('#minus')
const btnMultiply = document.querySelector('#multiply')
const btnDivide = document.querySelector('#divide')
const showOutput = document.querySelector("#show-output")

btnPlus.addEventListener('click' , () =>{
   var result = Number(input1.value) + Number(input2.value)
   console.log(result)
   showOutput.innerText = "Sum =" +result
})

btnMinus.addEventListener('click' , () =>{
    var result = Number(input1.value) - Number(input2.value)
    showOutput.innerText = "Difference = " + result
 })

 btnMultiply.addEventListener('click' , () =>{
    var result = Number(input1.value) * Number(input2.value)
    showOutput.innerText = "Multiply = " + result
 })

 btnDivide.addEventListener('click' , () =>{
    var result = Number(input1.value) / Number(input2.value)
    showOutput.innerText = "Divide = " + result
 })