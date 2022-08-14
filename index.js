const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
 socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});