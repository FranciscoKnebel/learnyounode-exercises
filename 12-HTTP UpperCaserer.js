var http = require("http");
var map = require("through2-map");

var port = process.argv[2];
var server = http.createServer(function(request, response) {
   if(request.method != "POST") {
       response.end("POST method requested!");
       return;
   }
   
   var value = request.pipe(map(function(data) {
      var string = data.toString().toUpperCase();
      
      return string;
   }));
   value.pipe(response);
});

server.listen(port);