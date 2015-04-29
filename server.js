var http = require('http');
var port = 1337;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end("Hello! Server is running.");
});

server.listen(port);

console.log('It is running at http://localhost:' + port);
