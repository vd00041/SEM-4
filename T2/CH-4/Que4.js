//write express js script as asked below .
//1) add one form witch contains user name,password and submit button data shoud be submited by http post method 
//2> on home page form shoud be display and while submiting the form on next page "/login" , is username is admin then it will display "welcome admin" otherwise it will display "please login with admin name"
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`<form action="/login" method ="post">
        <input type="text" name = "uname"/>
        <input type="password" name = "pass"/>  
        <button type="submit" >Submit</button>
    </form>`)
})
app.post("/login", (req, res) => {
    if (req.body.uname == "admin") {
        res.send("welcome admin")
    }
    else {
        res.send("please login with admin name")
    }
})
app.listen(2001);