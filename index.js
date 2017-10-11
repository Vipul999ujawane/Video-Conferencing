var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

//app.get('/', function(req, res, next) { res.send('Hello world!'); });

var server = app.listen(80,'0.0.0.0');
console.log('Server Started');
var options = {
    debug: true
}

app.use('/peerjs', ExpressPeerServer(server, options));

//server.listen(9000);
app.use(express.static('static'));
