
const express = require('express')
const app = express();
const path = require('path')
var cp = require('cookie-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(cp())
app.post('/next', (req, res) => {
    res.cookie('fn', req.body.fname);
    res.cookie('ln', req.body.lname);
    res.cookie('password', req.body.pass);
    res.redirect('/login');

})
app.get('/login', (req, res) => {
    res.set('content-type', 'text/html')
    res.clearCookie('ln');
    res.clearCookie('fname');
    res.write("Welcome " + req.cookies.fn + "<br><br>");
    res.write("Your password is " + req.cookies.password + "<br><br>")
    res.send();
}).listen(6002)

