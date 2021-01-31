const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// const events = require('events');                                               //
// const myEmit = new events.EventEmitter();
//
// myEmit.on('Click', function () {
//   res.sendFile(path.join(__dirname + '/home.html'));
// });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));//-app;+server
