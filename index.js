var express = require('express');
var app = express();

//app.get('/', function(req, res, next) { res.sendFile('static/index.html'); });

var server = app.listen(8000);

app.use(express.static('static'));
