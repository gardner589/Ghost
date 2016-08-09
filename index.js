var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
  res.sendfile('index.html')
})







app.listen(3016, function(){
  console.log("Listening localhost:3016");
})
