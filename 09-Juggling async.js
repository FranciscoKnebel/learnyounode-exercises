var http = require("http");
var bl = require("bl");

var urls = [];
var dataFromURLS = [];
var index = 0;

urls = [process.argv[2], process.argv[3], process.argv[4]];

for(var i = 0; i < urls.length; i++) {
    (function(index) {
        http.get(urls[index], function(response) {
            response.pipe(bl(function(err, data) {
                if(err)
                    console.error(err);
                    
                dataFromURLS[index] = data.toString();
                index++;
                
                if(index === 3)
                 printData();
                    
            }));
        }).on('error', function(e) {
            console.error("Error: " + e.message);
        });
        
    })(i);
}

function printData() {
    for(var j = 0; j < urls.length; j++) 
        console.log(dataFromURLS[j]);
}