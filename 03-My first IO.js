var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString();

var strings = buffer.split('\n'); //separates every line
console.log(strings.length - 1);
