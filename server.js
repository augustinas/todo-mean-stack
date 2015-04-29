var port = 1337;
var connect = require('connect');
var app = connect();

var anotherHelloWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('This actually does work');
};

app.use(anotherHelloWorld);
app.listen(port);

console.log('Server running at http://localhost:' + port);
