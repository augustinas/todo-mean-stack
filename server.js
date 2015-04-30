var port = 1337;
var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
  console.log(req.method, req.url);
  next();
};

var anotherHelloWorld = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('This actually does work');
};

app.use(logger);
app.use('/hello', anotherHelloWorld);

app.listen(port);
console.log('Server running at http://localhost:' + port);
