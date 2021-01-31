const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(function (req, res) {//
  res.writeHead(200, {'Contebt-Type': 'text/plain'}); //
  res.end('Hello world!');                            //
});                                                   //

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

server.listen(port, () => console.log(`url-shortener listening on port ${port}!`));//-app;+server
