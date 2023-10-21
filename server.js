const net = require('net');
const port = 1800;

const SERVER_NAME = process.env.TASK_ID;
const VERSION = `V7: Memory Leak: `

let memoryLeak = [];

const server = net.createServer((socket) => {
    // This function will be called when a client connects to the server.
    log('Client connected');
    socket.write(`${VERSION} Connected to Server: ${SERVER_NAME}`);

    // Handle incoming data from the client
    socket.on('data', (data) => {
        log(`Received data: ${data}`);
        socket.write(data);
        memoryLeak.push(data);
    });

    // Handle the client disconnecting
    socket.on('end', () => {
        log('Client disconnected');
    });

    // Handle errors
    socket.on('error', (err) => {
        log(`Error: ${err}`);
    });
});


server.listen(port, () => {
    log(`${VERSION} Listening on port ${port}. Name: ${SERVER_NAME}`);
});

function log(str) {
    console.log(`${new Date().toISOString()}: ${str}`);
}