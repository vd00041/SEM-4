var express = require("express")
var cp = require("cookie-parser")
var app = express()
app.use(cp());
app.get('/cookie', (req, res) => {
    res.cookie('name', 'Express');
    res.cookie('fname', 'JS');
    res.cookie('lname', 'expressJS')
    res.cookie('ID', 2, { expires: new Date(Date.now() + 10000) });
    res.cookie('email', 'e@gmail.com', { maxAge: 2000 });
    res.clearCookie('fname');
    res.clearCookie('_xsrf');
    res.clearCookie('ajs_anonymous_id');
    res.clearCookie('username-localhost-8888');
    res.clearCookie('username-localhost-8889');
    res.send(req.cookies);
}).listen(6006) 
