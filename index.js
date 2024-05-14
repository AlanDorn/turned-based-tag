// copy code
const express = require("express");
const app = express();
const path = require("path");

const WebSocket = require('ws');
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });


app.use(express.static(path.join(__dirname, "./public"))); 


app.get("/anything", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "blank.html"));
});

app.get('/user/:variable', function(req, res) {
    const variable = req.params.variable;
    res.send(`<html><body><h1>${variable}</h1></body></html>`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('Something from the server');
});

server.listen(3001, () => {
  console.log("WebSocket server running on port 3001");
});