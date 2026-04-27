//create web application that :1 => displace a from on home page to enter user's name.
//2=> send the from data to the server using post request.
//3=> the server shoud read the submited data from the request body
//4=> finaly display conform massage
var express = require("express")
var app = express()
app.use(express.urlencoded({ extended: true }));
/*app.get('/', (req, res) => {
    res.send(`<form action="/login" method ="post">
        <input type="test" name = "uname"/>
        <button type="submit"> click </button>
        </form>
        `)
}
);
app.post('/login', (req, res) => {
    const name = req.body.uname
    res.send("User created: " + name)
})
app.listen(8888)*/

app.get('/', (req, res) => {
    res.send(`<form action="/login" method ="get">
        <input type="test" name = "uname"/>
        <button type="submit"> click </button>
        </form>
        `)
}
);
app.get('/login', (req, res) => {
    const name = req.query.uname
    res.send("User created: " + name)
})
app.listen(8888);
