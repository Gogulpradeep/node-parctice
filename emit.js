const EventEmitter = require('events');
const  Emitter = new EventEmitter();

Emitter.on('eventname',(data)=>{
    console.log('Event tiggered with',data);
})




Emitter.emit('eventname','hello');