var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var server = http.createServer(function(request, response) {
    var readStream = fs.createReadStream(process.argv[3]);
    
    readStream.on("open", function() {
        readStream.pipe(response);
    });
    
    readStream.on("error", function(error) {
        response.end(error.toString());
    })
}).on('error', function(e) {
   console.error(e.message); 
});

server.listen(port);