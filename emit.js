//const EventEmitter = require('events');
//const  Emitter = new EventEmitter();

//Emitter.on('eventname',(data)=>{
    //console.log('Event tiggered with',data);
//});

//Emitter.emit('eventname','hello');

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on ('start',(data)=>{
    console.log('process completed');
});
emitter.on('data',(info)=>{
    console.log(`Received completed:${info}`);
})

emitter.emit('start');
emitter.emit('data', ' node js modules powerful');

