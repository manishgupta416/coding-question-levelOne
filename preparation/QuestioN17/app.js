// Create a CLI app which would detect fake news. This app will take news as input and then source.

// If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?



var readlineSync = require('readline-sync')

var inputNews = readlineSync.question('Enter a news')
var sourceOfNews = readlineSync.question('Enter a souurec of news')

if(sourceOfNews.toLowerCase == "Facebook".toLowerCase ||sourceOfNews.toLowerCase == "whatsapp".toLowerCase  || sourceOfNews.toLowerCase == "telegram".toLowerCase  ) {
  console.log("Don't believe things on FB and Whatsapp and telegram")
} else{
  console.log("yaa this is right news")
}