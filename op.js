//console.log(global);
//const os = require('os');

//console.log(__filename);
//console.log(__dirname);
//console.log("____");
//console.log(os.type());
//console.log(os.version());
//console.log(os.homedir());

//const path = require("path");

//console.log(path.dirname(__filename));
//console.log(path.basename(__filename));
//console.log(path.extname(__filename));
//console.log(path.parse(__filename));

//const add =(a,b) => a+b;
//const sub =(a,b)=> a-b;
//const mul = (a,b)=> a*b;
//const div = (a,b)=> a/b;

//module.exports = {add,sub,mul,div};


const fs = require('fs');
const  path = require('path');
const fsPromise = require('fs').promises;


const filesOp = async()=>{
    try{
        const data = await fsPromise.readFile(path.join(__dirname,'files','start.txt'),'utf-8');
   console.log('read completed');
   console.log(data);
    await fsPromise.writeFile(path.join(__dirname,"files","gamingpuli.txt"),"hello, the legend")
    console.log('write completed');
    await fsPromise.appendFile(path.join(__dirname,"files","gamingpuli.txt")," /n/n hi guys")
    console.log('updates is compled');
    await fsPromise.rename(path.join(__dirname,'files','gamingpuli.txt'),path.join(__dirname,'files','gogulpradeep.txt'))
     console.log("rename is completed");
    }
    catch(err){
        console.error(err);
    }
};

filesOp();



