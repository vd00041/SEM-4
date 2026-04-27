const express = require('express')
const app = express()
const sess = require('express-session')
app.use(sess({
    resave: true,
    saveUninitialized: true,
    secret: "123"
}));
app.get('/', (req, res) => {
    if (req.session.page) {
        req.session.page++;
        res.send("YOU HAVE VISITED: " + req.session.page + " TIMES");
    }
    else {
        req.session.page = 1
        res.send("Welcome user");
    }
}).listen(5006);