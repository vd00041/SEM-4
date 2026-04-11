const eventcounter = require('events');
const ee = new eventcounter()
/*ee.on('start', () => {
    console.log('event Started')
})
ee.emit('start');
*/
// with parameters 
/*ee.on('start', (start, end) => {
    console.log('start from ' + start + " to " + end + ' ')
})
ee.emit('start', 1, 100); */
