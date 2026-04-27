var exepress = require("express")
var app = exepress()

app.get('/data', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    const datas = req.query;
    console.log(typeof name);
    console.log(typeof datas);
    res.write(JSON.stringify(datas)),
        res.write(" Names " + name + " Ages " + age);
    res.send();

})
app.listen(6005);
