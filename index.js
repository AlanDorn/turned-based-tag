// copy code
// import * as cowsay from 'cowsay'; //cowsay.say({text:'mooo'})

const express = require('express');
const app = express();                    //server 1
const path = require('path');

const http = require('http');
const server = http.createServer(app);    //server 2

const { Server } = require('socket.io');
const io = new Server(server);            //server 3

const port = 3000;

// const WebSocket = require("ws");
// //websocket is attached to server here
// const wss = new WebSocket.Server({ server });
//storing players as object
const players = {

} 
//let vs const vs var
// const players = {}

//http server listens on port 3000
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//Look back here

// const http = require('node:http');
// const server = http.createServer((req, res) => {
//   const ip = res.socket.remoteAddress;
//   const port = res.socket.remotePort;
//   res.end(`Your IP address is ${ip} and your source port is ${port}.`);
// }).listen(3000);

//app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static('public')); //anything in directory public can be seen

app.get('/g-check', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/blank.html'));
  //res.sendFile(path.join(__dirname, "public", "/test.html"));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  players[socket.id] = {    //[] vs . syntax on player
    x: 0, y: 0
  } 

  io.emit('updatePlayers', players);    //socket.emit vs io.emit

  console.log(players); 
})

server.listen(port, () => {
  console.log(`WebSocket server running on port ${port}`);
});

console.log('server loaded');
// app.get("/user/:variable", function (req, res) {
//   const variable = req.params.variable;
//   res.send(`<html><body><h1>${variable}</h1></body></html>`);
//   console.log(`${variable}`);
// });




// wss.on("connection", function connection(ws) {
//   const clientID = generateUniqueID();
//   clients.push({ id: clientID, ws: ws });
//   console.log(`Client connected: ${clientID}`);
//   ws.on("message", function incoming(message) {
//     console.log(`received message from ${clientID}: ${message}`);
//   });

//   //ws.send('Something from the server');
//   ws.on("close", () => {
//     delete gameState.players[clientID];
//     clients = clients.filter((client) => client.id !== clientID); //remove client from list when disconnect
//     console.log(`Client disconnected: ${clientID}`);
//     broadcastGameState();
//   });
// });

// function broadcast(message, clientID) {
//   clients.forEach((client) => {
//     if (clients.id !== clientID) {
//       clients.ws.send(`${clientID}: ${message}`);
//     }
//   });
// }

// function generateUniqueID() {
//   return Math.random().toString(36).substr(2, 9);
// }


