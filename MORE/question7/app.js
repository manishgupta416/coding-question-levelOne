const btn = document.querySelector("#btn")
const showOutput= document.querySelector(".show-output")
const arr = [ 'manish','mayank','priya','abhijeet','mahak' , 'aman', 'aryan','vicky','rajbir','rahul']
btn.addEventListener('click', () =>{
  for (let i = 0; i < arr.length; i++) {
    var randomName = Math.floor(Math.random() * arr.length)
   showOutput.innerText =arr[randomName]
    
  }
})