const net = require('net');
const port = 1800;

const SERVER_NAME = new Date().toISOString();


const server = net.createServer((socket) => {
    // This function will be called when a client connects to the server.
    log('Client connected');
    socket.write(`Welcome to kube TCP stream. Connected to Server: ${SERVER_NAME}`);

    // Handle incoming data from the client
    socket.on('data', (data) => {
        log(`Received data: ${data}`);
        socket.write(data);
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
    log(`TCP Stream Server listening on port ${port}. Name:${SERVER_NAME}`);
});

function log(str){
    console.log(`${new Date().toISOString()}: ${str}`);
}