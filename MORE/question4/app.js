const fetchApiBtn = document.querySelector(".fetch")
const displayMsg = document.querySelector(".err-msg")
const serverUrl = "https://randomsuser.me/api/"
fetchApiBtn.addEventListener('click' ,()=>{
    fetch(serverUrl)
    .then(response => {
        if(response.ok == false) {
            throw Error `Error occured at response on status${response.status}`
        }else{
            return response.json()
        }
    })
    .then(data =>{
        console.log(data)
    })
 .catch((err)=>{
    console.log(err.name)
 })
})