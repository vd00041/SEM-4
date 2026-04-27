const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "lju1"
}));
app.use(express.static(__dirname, { index: "3.html" }))
app.get("/savesession", (req, res) => {
    req.session.uname = req.query.uname
    req.session.pass = req.query.pass
    res.redirect("/fetch")
})
app.get('/fetch', (req, res) => {
    res.set('content-type', 'text/html')
    res.write('Welcome :' + req.session.uname + '<br><br><hr>');
    res.write("<button onclick=\"window.location.href='/deletesession'\">logout</button>");
    res.send()
})
app.get("/deletesession", (req, res) => {
    req.session.destroy();
    res.redirect('/')
})
app.listen(6006);