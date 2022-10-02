const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")

const serverUrl ="https://mock-practice.prakhar10v.repl.co/bollywood?name="

function getTranslatedUrl (name) {
    return serverUrl + name
}


btn1.addEventListener('click' , ()=>{
    fetch(getTranslatedUrl(btn1.innerText))
    .then(res=> res.json())
    .then(data=> console.log(data.message))
})

btn2.addEventListener('click', ()=>{
    fetch(getTranslatedUrl(btn2.innerText))
    .then(res=> res.json())
    .then(data=> console.log(data.message))
})
// fetchData = (text) => {
//     fetch(getTranslatedUrl(text))
//     .then(res=> res.json())
//     .then(data=> console.log(data.message))
// }