//console.log(global);
//const os = require('os');

//console.log(__filename);
//console.log(__dirname);
//console.log("____");
//console.log(os.type());
//console.log(os.version());
//console.log(os.homedir());

const path = require("path");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

