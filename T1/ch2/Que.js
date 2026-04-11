//write node js program to using the events modeule to stemulate a seqance of event
//1 when a "Connection" event accures=>print "Connection successfully" and triger a "datarecived"event
//2 when the "data recoved" event accrued print(data recived successfully)
//3 fillaly print "thanks " at end of execution
//const { removeAllListeners } = require("cluster");
const eventcounter = require("events")
const ee = new eventcounter()
/*ee.on('Connection', function () {
    console.log('Connection successfully')
    ee.emit('data-recived')
});
ee.on('data-recived', function () {
    console.log('data recived successfully')

});
ee.emit('Connection')
console.log('thanks')*/
//resistering multiple event listners for the diffrent events (my evnt 1, my evnt 2))
//1 removing specific event listners (remove listners for my evnt 2)
//2 removing all the listners asociated with the event myevnt 1(remove all listners for my evnt 1)
//3 trigering events and observing with listners exexute
var fun1 = function (msg) {
    console.log("my function 1 " + msg)
}
var fun2 = function (msg) {
    console.log("my function 2 " + msg)
}
ee.on('myEvent1', fun1)
ee.on('myEvent2', fun2)
ee.on('myEvent1', fun1)
ee.on('myEvent2', fun2)
ee.removeListener('myEvent2', fun2)
ee.removeAllListeners('myEvent1'),
    ee.emit('myEvent2', 'Lj univercity')
ee.emit('myEvent1', 'LJIET')