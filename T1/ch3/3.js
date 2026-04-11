var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url + "<br>");
    res.end("Url Fetched");
}).listen(8280);