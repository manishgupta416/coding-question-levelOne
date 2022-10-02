
var listOfObj = [{
    nameOfTask:"Eating",
    completed: true,
},
{
    nameOfTask:"coding",
    completed: false,
},
{
    nameOfTask:"bathing",
    completed: true,
}
]

// console.log(listOfObj)

listOfObj.map((item)=>{
    // console.log(item)
    if(item.completed == true){
        console.log(item.nameOfTask)
    }
})