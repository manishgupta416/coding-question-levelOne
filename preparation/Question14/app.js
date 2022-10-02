var obj1 = {
  name:"Ram",
  power:2500,
  yuga:"Treta"
}

var obj2 = {
  name:"Krishna",
  power:2325,
  yuga:"Dwapar"
}

function greatestPower (obj1,obj2){
  if(obj1.age > obj2.age){
    return obj1.name
  }else{
    return obj2.name
  }
}

console.log(greatestPower(obj1,obj2))