const express = require('express');
const app = express();

/*app.get("/user/:id/:pip", (req, res) => {
    const userid = req.params.id;

    const pipp = req.params.pip
    res.send("Showing profile of :" + userid + " and  AGe is:" + pipp)
});
app.listen(5000);*/
app.get('/calender/:day/event/:birthday', (req, res) => {
    res.send(req.params)
})
app.listen(6001);