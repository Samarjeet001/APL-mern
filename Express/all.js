var express = require('express');
var app = express();

app.all('/', function (req, res) {
    res.send("Hello world using Http method all!");
});

app.listen(3000);