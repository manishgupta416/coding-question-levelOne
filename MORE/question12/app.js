const fetchBtn = document.querySelector("#fetchData")
const showOutput = document.querySelector("#show-output")
const serverUrl ="https://mystery-api.kushanksriraj.repl.co/get"
fetchBtn.addEventListener('click', ()=>{
    fetch(serverUrl)
    .then((res)=>{
        if(res.status =="404"){
            showOutput.innerText = "'page not found'"
        } else if( res.status == '401'){
            showOutput.innerText="you are not logged"
        }else if (res.status=='200') {
            showOutput.innerText="success api is working"
            return res.json()
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
        console.log(err.name)
        console.log(err.msg)
    })
})