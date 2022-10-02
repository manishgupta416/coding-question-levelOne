const apiCall = document.querySelector("#api-call")
const showOutput = document.querySelector("#show-output")
const serverURL = "https://api.funtranslations.com/translate.prate.json"
apiCall.addEventListener('click' , () =>{
 fetch(serverURL)
//  .then((res)=>{
//   if(res.status="404"){
//     showOutput.innerText =  "page not found"
//   } else if(res.status= "401"){
//     showOutput.innerText =  'you are not logged in'
//   }else{
//     return res.json()
//   }
//  })
//  .then(data => console.log(data))
//  .catch(errorHandler)
// })

.then(res =>{
  if(res.status="404"){
    showOutput.innerText =  "page not found"
  } else if(res.status= "401"){
    showOutput.innerText =  'you are not logged in'
  }else{
    return res.json()
  }
})
 
 .then(data => console.log(data))
 .catch(errorHandler)
})

function errorHandler(){
  alert("something went wrong please try again later" , error)}
// .then(res=> res.json)
