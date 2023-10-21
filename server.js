const net = require('net');

const SERVER_ID = new Date().getTime();
const PORT_COUNT = process.env.PORT_COUNT ? parseInt(process.env.PORT_COUNT) : 1;
const MSG = `V8 TCP Server: `
console.log(`PORT_COUNT: ${PORT_COUNT}`);


function log(str) {
    console.log(`${new Date().toISOString()}: ${str}`);
}

function createServerForPort(port) {
    const server = net.createServer((socket) => {
        // This function will be called when a client connects to the server.
        log('Client connected');
        socket.write(`${MSG} Connected to Server ID: ${SERVER_ID}`);

        // Handle incoming data from the client
        socket.on('data', (data) => {
            log(`Received data: ${data}`);
            socket.write(data);
        });

        // Handle the client disconnecting
        socket.on('end', () => {
            log(`Client disconnected. ID: ${SERVER_ID}`);
        });

        // Handle errors
        socket.on('error', (err) => {
            log(`Error: ${err}`);
        });
    });

    server.listen(port, () => {
        log(`${MSG} Listening on port: ${port} ID: ${SERVER_ID}`);
    });

}


for (let index = 0; index < PORT_COUNT; index++) {
    createServerForPort(1800 + index);
}
