Node.js identifies several types of events. Each event can be attached to a callback function. Whenever an event occurs, the callback attached to it is triggered. The Node.js runtime is always listening to events that may occur. When any event that it can identify occurs, its attached callback function is executed.

The Node.js API includes events module, consisting mainly the EventEmitter class. An EventEmmiter object triggers (or emits) a certain type of event. You can assign one or more callbacks (listeners) to a certain type of event. whenever that event triggers, all the registered callbacks are fired one by one in order to which they were registered.


These are the steps involved in event handling in Node.js API.

--> First, import the events module, and declare an object of EventEmitter class

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

--> Bind an event handler with an event with the following syntax −

// Bind event and event  handler as follows
eventEmitter.on('eventName', eventHandler);

--> To fire the event programmatically −

// Fire an event 
eventEmitter.emit('eventName');


=> example -- Given below is a simple example that binds two listeners to the on event of EventEmitter class

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection successful.');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received successfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

// Fire the data_received event 
eventEmitter.emit('data_received');
console.log("Program Ended.");

