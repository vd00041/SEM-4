// write an express js script one jeson array of 3 objects having property Name,age.
//shot this object acording to age
// is user req ("sorted") in  Url then all name alongs age shound be printed acording to order
// also sorted value and display jason object on home page
const express = require('express');
const app = express();

student = [{ Name: 'ABC', Age: 28 },
{ Name: 'CDE', Age: 30 },
{ Name: 'EFG', Age: 18 }
]
app.get('/', (req, res) => {
    res.send(student);
});
app.get('/sort', (req, res) => {
    res.set("content-type", "text/html");
    var des = student.sort((a, b) => b.Age - a.Age);
    for (k of des) {
        res.write("<h1>" + k.Name + "=" + k.Age + "</h1>");
    }
    res.end()
})
app.listen(5000)