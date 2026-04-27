const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname, { index: "7.html" }));
app.use(express.urlencoded({ extended: true }));
app.post("/num", (req, res) => {
    Number = parseInt(req.body.n1)
    res.set('Content-type', 'text/html')
    if (!(isNaN(Number))) {
        if (((Number / 2) == 0)) {
            res.write("YOUR NUMBER IS EVEN <a href='/'>Try again</a>")
        }
        else {
            res.write('YOUR NUMBER IS ODD <a href="/">Try again</a>')
        }
    }
    else {
        res.write('Please enter valid number <a href="/">Try again</a>')
    }
    res.send()
})
app.listen(6002)