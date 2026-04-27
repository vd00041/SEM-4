const express = require("express")
const app = express()
const path = require("path")

const staticpath = path.join(__dirname, "../");
//app.use(express.static(staticpath, { index: '1.html' }));
app.get("/", (req, res) => {
    res.sendFile(staticpath + "/1.html")
})
//app.use(express.static("frontEnd"));
app.listen(3001);
