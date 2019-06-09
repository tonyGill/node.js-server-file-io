var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('Connection was success');
	
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
	console.log('Data received Success');
	
});

eventEmitter.emit('connection');

console.log("end program");

