const fetchBtn = document.querySelector("#api-call");
const showMsg = document.querySelector("#show-msg");

const serverUrl = "https://periodic-table-elements-info.herokuapp.com/elements";

fetchBtn.addEventListener("click", () => {
  fetch(serverUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.map((item) => {
        // console.log(item.block)
        //alag alg condition isliye diya h taki we get value if we use && then we not get value
        if (item.block == "p") {
          console.log(item.name);
          showMsg.innerHTML += `<li> p block elements : ${item.name}</li>`;
        }

        if (item.block == "f") {
          showMsg.innerHTML += `<li> f block elements : ${item.name}</li>`;
        }
      });
    });
});
//
