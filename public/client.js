document.addEventListener("DOMContentLoaded", function() {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onopen = function() {
        console.log('Connected to the server!');

        ws.send('h-h-hola server!');
    };

    ws.onmessage = function(event) {
        const gameState = JSON.parse(event.data);
        updateGame(gameState);
        //console.log('message from server ', event.data);
    };

    function updateGame(gameState){
        
    }
    // ws.onerror = function(error) {
    //     console.log('Websocket error: ' + error);
    // };

    // ws.onclose = function() {
    //     console.log('Disconnected from the server');
    // };
});