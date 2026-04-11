//write a node js script to hendle a event to write data in file, append data in file and then read the file and display data in console
var fs = require('fs');
const eventcounter = require("events");
const { error } = require('console');
const ee = new eventcounter();
ee.on('write', function () {
    fs.writeFile('abc.txt', 'hello', (err) => {
        if (err) throw err
        console.log('file created');
        ee.emit('append');
    });
});
ee.on('append', function () {
    fs.appendFile('abc.txt', ' byee', (err) => {
        if (err) throw err
        console.log('text appended');
        ee.emit('read')
    }
    )
})
ee.on('read', function () {
    fs.readFile('abc.txt', 'utf-8', (err, data) => {
        if (err) throw err
        console.log("file readed successfully : " + data);
    });
})
ee.emit('write');



