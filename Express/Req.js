var express = require('express');
var app = express();
app.get('/', function (req, res) {
    console.log(req.app);
    res.send("Hello world! from Req.js");
});
app.listen(3000);