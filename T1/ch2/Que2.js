//write a node js script to create two listeners to call a common event,print number of event associated with amiter remove 1 of listerner and call remaing listeners again
//also print number of remaing listeners 
const eventcounter = require("events");
const ee = new eventcounter()
var listener1 = function () {
    console.log("Listener 1 executed");
}
var listener2 = function () {
    console.log("Listener 2 is executed");
}
ee.on('conn', listener1);
ee.on('conn', listener2);
let count = ee.listenerCount("conn");
console.log('Count1: ' + count);
console.log('Count2: ' + count);
ee.removeListener('conn', listener1);
count = ee.listenerCount("conn");
console.log("counting again" + count);
ee.removeAllListeners('conn')
count = ee.listenerCount('conn');
console.log('counting final', +count)
ee.emit('conn');