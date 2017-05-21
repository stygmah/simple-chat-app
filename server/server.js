const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));



io.on('connection',(socket)=>{
	console.log('new user connected');
	socket.on('disconnect',()=>{
		console.log('User disconnected');
	});
});


server.listen(port,()=>{
	console.log('Server running on port ',port);
});