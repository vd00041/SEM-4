const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname, { index: "6.html" }));
app.use(express.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    Uname = req.body.uname;
    Pass = req.body.pass;
    res.set('Content-type', 'text/html')
    if ((Uname == "admin") && (Pass == "1234")) {
        res.write("Welcome")
    }
    else {
        res.write("Envalid Details Log in again <a href='/'>Login Again</a>")
    }
    res.send()

}).listen(6003)