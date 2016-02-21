var http = require('http');
var concatStream = require('concat-stream');

var url = process.argv[2];
http.get(url, function(response) {
    response.pipe(concatStream(function(data) {
        var string = data.toString();
        
        console.log(string.length);
        console.log(string);
    }));
    
}).on('error', function(e) {
    console.error("Error: " + e.message);
});