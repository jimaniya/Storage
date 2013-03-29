// 모듈을 추출합니다
var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World ..! </h1>');
}).listen(3000, function() {
  console.log('Server Running...');
});
