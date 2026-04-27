const express = require('express');
const app = express();
const path = require('path');
var csspath = path.join(__dirname, "../css");
var htmlpath = path.join(__dirname, "../html");
app.use(express.static(csspath,));
app.use(express.static(htmlpath, { index: '2.html' }));
app.listen(3011);