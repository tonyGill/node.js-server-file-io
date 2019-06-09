var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener = function listener(){
	console.log('Listener Executed');
}

eventEmitter.addListener('connection', listener);

var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter, 'connection');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener);

eventEmitter.emit('connection');

