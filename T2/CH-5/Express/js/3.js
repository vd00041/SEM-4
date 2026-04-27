const express = require('express');
const app = express();
const path = require('path');
const staticpath = path.join(__dirname, "../html");
app.use(express.static(staticpath, { index: '3.html' }));
app.get("/process", (req, res) => {
    var fname = req.query.fname;
    var lname = req.query.lname;
    console.log(req.query);
    res.send("Welcome: "+ fname +" "+lname)
    res.send();
    }
)
app.listen(8002);  