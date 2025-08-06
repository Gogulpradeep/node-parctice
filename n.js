const { error } = require('console');
const http = require('http');
const PORT = 3000;

     const sever =  http.createServer((req,res)=>{
        res.writeHead(200,{'content-type':"text/plain"});
        console.log('hello sever world!');
        res.end();

 });


 sever.listen(PORT,(error)=>{
    if(error){
        console.log(`something is wrong`,PORT);
    }else{
        console.log(`sever is running on http://localhost:3000`);
    }
 });