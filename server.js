const WebSocket = require('ws');
const PORT = process.env.PORT || 8080;  // Use the port Heroku assigns or 8080 locally

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
    console.log('A new client connected!');

    ws.on('message', function incoming(message) {
        console.log('Received: %s', message);

        // Echo the message back to the client
        ws.send('Server received: ' + message);
    });

    ws.on('close', function close() {
        console.log('Client has disconnected');
    });

    // Send a welcome message on connection
    ws.send('Welcome to the WebSocket server!');
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
