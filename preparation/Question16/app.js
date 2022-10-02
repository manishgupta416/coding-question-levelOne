// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

// Write a function which takes two objects and return the person with more power based on their name and power both.

var obj1 ={
  name:"Ram",
  power:2500,
  yuga:"Treta"
}

var obj2 ={
  name:"Krishna",
  power:2325,
  yuga:"Dwapar"
}

function getMorePower(obj1,obj2){
  var name = (obj1.name.length * 35) + obj1.power
  var name1 = (obj2.name.length * 35) + obj2.power
  console.log(name ,name1)

  if(name > name1) {
    return obj1.name
  }else{
    return obj2.name
  }
}
console.log(getMorePower(obj1,obj2))