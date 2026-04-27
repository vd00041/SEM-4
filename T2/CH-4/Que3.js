//create a web server that 1) acept a get request with dynamic user id in a url 2> also acetpt addictional data {name,age } using Query parametrs extrect id from route para meters {Name,age } from Query string. return a json responce contaning al recived data.
const express = require("express");
const app = express()
app.get("/user/:id", (req, res) => {
    const userid = req.params.id
    const name = req.query.name
    const age = req.query.age
    res.json({
        message: "Data recived",
        params: { id: userid },
        query: { name, age }
    });
});
app.listen(5005);