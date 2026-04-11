var express = require("express");
var app = express();
app.get("/", (req, res) => {
    res.set('content-type', 'test/plain')
    res.write("hiee")
    res.end()
});
app.get("/about", (req, res) => {
    res.set('content-type', 'test/plain')
    res.send("<be>hiee </br>")
});
app.listen(5006)()=> {
    console.log("server stuned
    ")}