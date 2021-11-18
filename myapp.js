var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var server = http.createServer(app);
var content = fs.readFileSync('index.html')

app.use('/css',express.static('css'));

app.get('/',function(req,res){
  res.writeHead(200,{'Content-type':'text/html'});
  res.write(content);
  res.end()
});

server.listen(8080,'127.0.0.1',function(){
  console.log("Link Start!")
})
 