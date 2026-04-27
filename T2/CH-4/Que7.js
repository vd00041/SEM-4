//create a one html form witch contains textfild for name,emaill filed and check box form subscribction. html file will be loeaded on home page.on login page welcome user welcome user and emaill id data printed.
//2 if user checked the subscribction then "thank you for subscribction " and logout filed will displayed .
//4 if user click on logout then he or she will be redirect on home page
//5 if user has not optain subsctibction then massage "YOu can subscrib for daily massage" and subsctibe link will be displayed. if user click on subscribe link then he or she will be redirect on home page.
//6 in this page thankyou for subsction will printed and logout link will be displayed
const express = require("express")
const app = express()
app.use(express.urlencoded({ extened: true }))
app.get("/", (req, res) => {

    res.send(`<form action="/login" method="post">
        name: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email"><br><br>
        <input type="checkbox" name="newsletter">Subscribe?
        <input type="submit" value="submit">
    </form>`)

})
app.post("/login", (req, res, next) => {
    res.set("content-type", "text/html");
    res.write("<h1> welcome:" + req.body.name + "</h1>")
    res.write("<h1>Your emaill is :" + req.body.email + "</h1>")
    next();
})
app.post("/login", (req, res) => {
    if (req.body.newsletter == 'on') {
        res.write('<div>THank you for subscribe <a href="/">Logout </a></div>');
    }
    else {
        res.write("<div>YOu can subscrib to get daily update <a href='/subscribe'>Subscribe</a></div>");
    }
    res.send();

})
app.get("/subscribe", (req, res) => {
    res.set("content-type", "text/html");
    res.write('THank you <a href="/">Logout </a>');
    res.send();
})
app.listen(5001);