var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

//app.get('/', function(req, res, next) { res.sendFile('static/index.html'); });

var server = app.listen(9000);

var options = {
    debug: true
}

app.use('/peerjs', ExpressPeerServer(server, options));
app.use(express.static('static'));
