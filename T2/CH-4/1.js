var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.set("content-type", "text/plain");
    //res.write("<i>hello</i>")// it  does't set header and dont call res.end() method write and send method dont use both together
    res.send("<i>hello</i>")//it sets the header and ends the response, so we don't need to call res.end() explicitly
    //res.end();
}).listen(5005);
app.listen(parent, [host], [backlog], [callback]);