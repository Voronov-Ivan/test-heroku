const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
//
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
app.set('view egine', 'ejs');
const urlencodedParser = bodyParser.urlencoded({extended: false});
// app.get("/start_game", urlencodedParser, function (request, response) {
//     response.render('start_game', {'players': 1});
// });
var a = 0;
app.post("/start_game", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log("You connect");
    a++;
    response.render('start_game.ejs', {'players': a});
});

const server = require('http').Server(app); //
// app.listen(PORT, () => console.log(`url-shortener listening on port ${PORT}!`));
//

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/game', function(req, res) {
    res.sendFile(path.join(__dirname + '/game.html'));
});
//
const server_ = express()
  app.use((req, res) => console.log("Complete"));
  app.listen(PORT, () => console.log(`url-shortener listening on port ${PORT}!`));
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
