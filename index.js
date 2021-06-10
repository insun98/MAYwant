var express = require('express')
var app = express()
app.use(express.static(__dirname + '/36-rabbit')); 
app.get('/', function(req, res) {
   res.send('<h1>Helloooo</h1>')
})
 
app.listen(8888,function(){
   console.log("server started at 8888")
})
