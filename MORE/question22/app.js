const apiBtn = document.querySelector("#api-call");
const showMsg = document.querySelector(".show-msg");
const serverUrl = "https://mock-practice.prakhar10v.repl.co/items";
apiBtn.addEventListener("click", () => {
  fetch(serverUrl)
    .then((response) => {return response.json()})
    .then((json) => {
        console.log(json)
        let price = 0
         let itemName = ""
        json.map((item)=>{
            
           if(item.price> price){
            price = item.price
            itemName = item.item
           }
           
        })
        console.log(`${itemName} have hightest price of ${price} `)
    })
    .catch((err) => {
      console.log(err);
    });
});
