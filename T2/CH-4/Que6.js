//create a middleware that log a massage indicating that student entered in campus. 
//2 create another middleware that checks student has valid id . if it is valid,stored student name on the req object and allow next step. if it is not valid, stop further prosesing and send appropreate responce 
//3 apply both middle ware function to route a name "/class" and finaly send weclome massage to the students
const express = require("express");
const app = express();
const entrylog = (req, res, next) => {
    res.write("student entered in campus\n");
    next();
}
const checkID = (req, res, next) => {
    const hasId = true;
    if (hasId) {
        req.name = "xyz"
        console.log("ID verified")
        next();
    }
    else {
        res.send("access denied");
    }
}
app.use("/class", entrylog, checkID);
app.get("/class", (req, res) => {
    res.write("welcome " + req.name);
    res.end();
});
app.listen(5);