var fs = require('fs')
  , port = process.argv[2] || 1107
  , express = require('express')
  , _ = require('underscore')
  , serveIndex = require('serve-index')
  , app = express()
  , store = require("jfs")
  , db = new store("data");

var FILES_DIR = '/files';

app.use('/files', express.static(__dirname +FILES_DIR));

app.use('/files', serveIndex(__dirname +FILES_DIR));

app.use('/bower_components', express.static(__dirname + '/static/bower_components'));
app.use(express.static(__dirname + '/static/app'));

var router = express.Router();

router.get('/files', function (request, response) {

  fs.readdir(__dirname + FILES_DIR, function (err, files) {
    var objArray = _.chain(files)
      .filter(function (fileName) {return !!fileName.match(/.*dmp/)})
      .map(function (fileName) { return { name: fileName}})
      .value();

  console.log(objArray);
    db.all(function (err, value) {

      if (!value) {
        value = {};
      }

      var array = _.map(objArray, function (fileObj) {
        return _.extend(fileObj, {rate: value[fileObj.name]});
      });

      response.json(array);
    });
  });
});

var changeVotes = function (fileName, change, response) {
  db.get(fileName, function(err, value){
    if (value) {
      value += change;
    }
    else {
      value = change;
    }

    db.save(fileName, value, function(err, obj){
      response.json({result: "success"});
    });
  });
};

router.delete('/files/:file', function (request, response) {
  var fileName = request.params.file;

  fs.unlink(__dirname + FILES_DIR + '/' + fileName, function (err) {
    if (err) {
      response.json({result: "failed", message: err});
    }
    else {
      response.json({result: "success"});
    }
  })
});

router.post('/downvote/:file', function (request, response) {
  var fileName = request.params.file;

  changeVotes(fileName, -1, response);
});

router.post('/upvote/:file', function (request, response) {
  var fileName = request.params.file;

  changeVotes(fileName, 1, response);
});

app.use('/api', router);

app.use(function (request, response) {
  redirect('/index.html');
});

app.listen(port);
console.log('Server started at ' + port);
