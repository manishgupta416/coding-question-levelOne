const apiCall = document.querySelector("#callApi")
const showOutput = document.querySelector("#show-output")
const serverUrl = "https://randomuser.me/api/?results=10"
apiCall.addEventListener('click' , ()=>{
 fetch(serverUrl)
 .then(response => {
    return response.json()}
    )
.then(data =>{
    console.log(data)
    console.log(data.results.length)
    data.results.map((data)=>{
        console.log(data.name.first) 
        showOutput.innerHTML += ` <li> name : ${ data.name.title} ${data.name.first}  ${data.name.last}  age: ${data.dob.age}</li>`
            //   console.log(data.name.first) 
            //   console.log(data.name.first) 
    })
    // console.log(data.results[0].name.first)
    for (let i = 0; i < data.results.length; i++) {
        
        // console.log(data.results[i].name.first)
        // console.log(data.results[i].dob.age)
        // var listViewItem=document.createElement('li');
        // listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
        // listView.appendChild(`name : ${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last} and age = ${data.results[i].dob.age}`);
        // // showOutput.innerHTML = `<li>  </li> `

    }
   
})
})