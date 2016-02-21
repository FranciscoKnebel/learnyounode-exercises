var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var fileType = '.' + process.argv[3];

fs.readdir(folder, callback);

function callback(err, data) {
 if(err)
  throw err;

 for(var index = 0; index < data.length; index++) {
  var file = data[index];

  if(path.extname(file) === fileType)
   console.log(file);
 
 }
}
