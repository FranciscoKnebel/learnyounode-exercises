var http = require("http");
var url = require("url");

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

var port = process.argv[2];
var server = http.createServer(function(request, response) {
    var urlRequestObj = url.parse(request.url, true);
    var path = urlRequestObj.pathname.toLowerCase();
    var date = new Date(urlRequestObj.query.iso);

    response.writeHead(200, {
       'Content-Type': 'application/json' 
    });

    var obj = null;
    if(path === '/api/parsetime')
        obj = parseTime(date);
    else if(path === '/api/unixtime')
        obj = { "unixtime": date.getTime() };
    else
        response.writeHead(404);
        
    if(obj !== null) {
        var data = JSON.stringify(obj);
        response.write(data);
    }
    
    response.end();
}).on("error", function(e) {
    console.error(e.message);
});

server.listen(port);