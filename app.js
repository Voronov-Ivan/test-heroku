const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//
const server = require('http').Server(app); //
const io = require('socket.io')(server);
server.listen(port, () => console.log(`url-shortener listening on port ${port}!`));
//

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname + '/game.html'));
});

//
users = [];
connected = [];
io.on('connection', function (socket) {
  socket.emit('news','You connect');
  socket.on('my other event', function (data) {
    console.log(data);
    connected.push(socket);
  });
  socket.on('disconnect',function () {
    connected.splice(connected.indexOf(socket),1);
    console.log("disconnect");
  })
});
//

//app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));//-app;+server
