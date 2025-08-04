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

const { error } = require('console');
const fs = require('fs');
const  path = require('path');

fs.readFile(path.join(__dirname,'files','start.txt'),'utf-8', (error,data)=>{
    if (error){
        throw error;

    }else{
        console.log(data);
    }
} );

fs.writeFile(path.join(__dirname,"files","gamingpuli.txt"),"hello, the legend",(error,data)=>{
    if(error){
        throw error;
    }else{
        console.log("write completed");
    }
    fs.appendFile(path.join(__dirname,"files","gamingpuli.txt")," /n/n hi guys",(error,data)=>{
    if(error){
        throw error;
    }else{
        console.log('updates is compled');
    }
    fs.rename(path.join(__dirname,'files','gamingpuli.txt'),path.join(__dirname,'files','gogulpradeep.txt'),(error,data)=>{
    if (error){
        throw error;
    } else{


        console.log("rename is completed");
    }
});


});

    
});



