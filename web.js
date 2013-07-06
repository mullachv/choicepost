var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(readStringFromFile('./index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var readStringFromFile = function(filename) {
    var byteBuf = fs.readFileSync(filename);
    return byteBuf.toString();
}

