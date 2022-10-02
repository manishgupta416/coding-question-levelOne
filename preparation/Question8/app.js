
const showOutput = document.querySelector("#show-output")
const apiCall = document.querySelector("#api-call")

var serverUrl = "https://reqres.in/api/users/23"

apiCall.addEventListener('click' , () =>{
 fetch(serverUrl)
 .then((res)=>{
  if(res.ok == false) {
    throw Error (`error occured with this api & response status is ${res.status}`)
  } else{
    return res.json()
  }
 })
 .then(data => console.log(data))
 .catch((err)=>{
  console.log(err)
 })

})

