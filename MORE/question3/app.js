const showOutput = document.querySelector(".show-output")
const showOutput2 = document.querySelector(".show-output2")
const apiCallBtn = document.querySelector("#api-call")
const serverUrl = "https://randomuser.me/api/?results=10"
apiCallBtn.addEventListener('click' ,()=>{
    fetch(serverUrl)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        //     console.log(data)
            data.results.map((data)=>{
            // console.log(data)
            
            if(data.gender == "female"){
                console.log(data.gender)
                showOutput.innerHTML += `<li> name : ${data.name.title} ${data.name.first} ${data.name.last}  gender: ${data.gender} </li>`
                showOutput.style.color = "pink"
            }else{
                showOutput2.innerHTML += `<p> name : ${data.name.title} ${data.name.first} ${data.name.last}  gender: ${data.gender} </p>`
                // showOutput.style.color = "black"
            }
        })
    })

})