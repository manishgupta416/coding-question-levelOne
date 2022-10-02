//Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

var readlineSync = require('readline-sync')

var noOfStudents = 2
var highestMarks = 0
var nameOfStudent = ''

for (var i = 0; i <= noOfStudents; i++) {
  var studentName = readlineSync.question("Enter the name of student ")

  var testMark = Number(readlineSync.question("Enter the testMark of student ")
  )
  var prefinalmarks = Number(readlineSync.question("Enter the pre final marks of student "))

  var finalMarks = Number(readlineSync.question("Enter the final marks of student "))

  var totalMarks = (testMark + prefinalmarks + finalMarks)
  var avg = ((testMark + prefinalmarks + finalMarks) / 3)
  console.log("average marks = " + avg)
  if (totalMarks > highestMarks) {
    highestMarks = totalMarks
    nameOfStudent = studentName
  }
}
console.log(highestMarks)
console.log(nameOfStudent)