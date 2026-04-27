// wirte js file to req servr and dispay ob brouser
student = {
    name: "FDS",
    age: 19
}
var express = require("express");
var app = express();
app.get("/", '(req,res')=> {
    res.set("content-type", 'application/json')
}

