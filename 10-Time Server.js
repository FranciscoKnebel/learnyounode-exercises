var net = require("net");
var time = require("strftime");

var port = parseInt(process.argv[2], 10);

var server = net.createServer(function(socket) {
    socket.end(time('%F %R', new Date()) + '\n');
});

server.listen(port);