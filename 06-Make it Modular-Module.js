var fs = require('fs');
var path = require('path');

module.exports = function(directory, fileType, callback) {
 fs.readdir(directory, function(err, list) {
  if(err)
   return callback(err);
  else {
   var listFinal = [];

   for(var index = 0; index < list.length; index++) {
    var file = list[index];

    if(path.extname(file) === '.' + fileType)
     listFinal.push(file); 
   }

   callback(null, listFinal);
  }
 });
};
