//const { error } = require('console');
//const http = require('http');
//const PORT = 3000;

   //  const sever =  http.createServer((req,res)=>{
     //   res.writeHead(200,{'content-type':"text/plain"});
   //     console.log('hello sever world!');
     //   res.end();

 //});


 //sever.listen(PORT,(error)=>{
   //// if(error){
    //    console.log(`something is wrong`,PORT);
    //}else{
     //   console.log(`sever is running on http://localhost:3000`);
   // }
 //});

 const http = require('http');
 const fs = require('fs');
const { error } = require('console');
 const PORT = 3001;

 const sever = http.createServer((req,res)=>{

    if (req.url==='/'){
    fs.readFile('index.html', (error,data)=>{

        if(error){
            res.writeHead(500,{'content-type':'text/plain'})
            res.end('sever error');
        }else{
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data);
        }
    })
    }else{
        res.writeHead(404, {'content-type':'text/plain'})
        res.end('page was not found');
    }

 });

 
    sever.listen(PORT,()=>{
        console.log('server is running :http://localhost:3001')
    })




