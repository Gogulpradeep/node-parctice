const fs = require('fs');
const path = require('path');

const rs= fs.createReadStream(path.join('files','bigtext.txt'),{encoding:'utf-8'});
const wr = fs.createWriteStream(path.join('files','bigfiles.txt'));

//rs.on('data',(dataChunk)=>{
//wr.write(dataChunk)

//})

rs.pipe(wr);
