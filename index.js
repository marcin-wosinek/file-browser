var //fs = require("fs")
   port = process.argv[2] || 1107
  , express = require('express')
  , serveIndex = require('serve-index')
  , app = express();

app.use('/files', express.static(__dirname + '/files'));

app.use('/files', serveIndex(__dirname + '/files'));

app.use(function(request, response) {
  response.end('<h1>Hello world</h1>');
});

app.listen(port);
console.log('Server started at ' + port);
