const express = require('express');
const app = express();
app.use(express.static(__dirname, { index: "5.html" }));
app.get("/calc", (req, res) => {
    var num1 = parseInt(req.query.n1)
    var num2 = parseInt(req.query.n2)
    if ((num1 > 0) && (num2 > 0)) {
        if (req.query.formula == "add") {
            a = num1 + num2
            res.write("addition: =" + a)
        }
        else if (req.query.formula == "sub") {
            s = num1 - num2
            res.write("SUBTRACTION: =" + s)
        }
        else if (req.query.formula == "mul") {
            m = num1 * num2
            res.write("Multiply: =" + m)
        }
        else if (req.query.formula == "div") {
            d = num1 / num2
            res.write("Division: =" + d)
        }
        else {
            res.write("you not select any formula")
        }
    } else {
        res.write("Invalaid number")
    }
    res.send()
}).listen(6005)