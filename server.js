var express = require('express');
var server = express();

server.get('/',function(req,res){
  res.send('hello world')
})

server.listen(3000,function(){
  console.log('listening 3000')

})
