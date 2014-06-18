var //fs = require("fs")
   port = process.argv[2] || 1107
  , express = require('express')
  , serveIndex = require('serve-index')
  , app = express();

app.use('/files', express.static(__dirname + '/files'));

app.use('/files', serveIndex(__dirname + '/files'));

app.use('/bower_components', express.static(__dirname + '/static/bower_components'));
app.use(express.static(__dirname + '/static/app'));

app.use(function(request, response) {
  redirect('/index.html');
});

app.listen(port);
console.log('Server started at ' + port);
