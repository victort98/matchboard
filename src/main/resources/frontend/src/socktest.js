var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
 
client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
 
client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });
    
    function sendNumber() {
        if (connection.connected) {
            var payload = {"action":"message","message":"Hello"}
            let socketExample = {
                action: 'message',
                message: 'Testing sockets',
                timestamp: Date.now()
              }
            
            //var number = Math.round(Math.random() * 0xFFFFFF);
            connection.send(JSON.stringify(socketExample));
            //setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});
 
client.connect('ws://localhost:3200/your-socket-route');