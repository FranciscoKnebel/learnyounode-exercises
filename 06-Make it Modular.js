var module = require('./06-Make it Modular-Module.js');

module(process.argv[2], process.argv[3], function(err, list) {
 if(err)
  console.log("Error");
 else {
  for(var i = 0; i < list.length; i++)
   console.log(list[i]);
 }
});
