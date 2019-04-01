var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function() {
    console.log('I hear a shout');
}

//Assign the event handler to an event:
eventEmitter.on('shout', myEventHandler);

//Fire the 'shout' event:
eventEmitter.emit('shout');