const txt = document.querySelector("#txt")
const btn = document.querySelector("#btn")
const output = document.querySelector("#msg")


btn.addEventListener('click' , function checkHandler (){
    var name = txt.value
    console.log(typeof name)

    if(name == "Tanvi" ){
        output.innerText = "Tanvi is awesom girl"
    } else if(name == "Tanvi" ){
        output.innerText = "Tanvi is awesom girl"
    }
    else if(name == "Tanay" ){
        output.innerText = "Tanay is awesom mentor"
    }
    else if(name == "Akansha" ){
        output.innerText = "Akansha is awesom interviwer "
    }else{
        output.innerText = "I don't know about you "
    }
})