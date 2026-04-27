// design a node js witch with s followning requrement
//1> first middle ware display shoud massage indicating that 1st function executed
//2> second middle ware should display massage indicating that 2nd function executed.
//3> The third middleware shoud perform a simple arithmatic opration  and stored result into stored object ,  then display it in console .
//4> APPLY ALL 3 midle ware function in seqance in to a single route "/student" after excuting all midleware,display thank you massage
const express = require("express");
const app = express();
const addone = (req, res, next) => {
    res.write("First FUnction executed\n");
    next();
}
const addtwo = (req, res, next) => {
    res.write("secound functiom executed\n");
    next();
}
const addthree = (req, res, next) => {
    req.total = 50 + 40;
    console.log("total is " + req.total);
    next();
}
app.get("/student", addone, addtwo, addthree, (req, res) => {
    res.write("thank you ");
    res.end();
})
app.listen(8002);