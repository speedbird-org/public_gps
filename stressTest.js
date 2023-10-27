const net = require('net');

// const SERVER_IP = '139.59.30.173'; //docker swarm entry point

// const SERVER_IP = '142.93.217.249'; // K5 entry point
const SERVER_IP = '144.126.255.213'; //K5 REserved IP

const SERVER_PORT = 1800;

const CONNECTIONS = process.env.CONN ? parseInt(process.env.CONN) : 2000;
const INTERVAL = process.env.INTERVAL ? parseInt(process.env.INTERVAL) : 0;

let serverCount = 1;


const DATA = 'GPS_DATA_FROM_DEVICE';

async function asyncSleep(millis) {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(true);
        }, millis);
    }));
}

function connectAndSendData() {

    const client = new net.Socket();

    client.connect(SERVER_PORT, SERVER_IP, () => {
        console.log(`Client: ${serverCount++} connected to GPS server.`);
    });

    client.on('connect', () => {

        if (INTERVAL) {
            setInterval(() => {
                client.write(DATA);
            }, 1000 * INTERVAL);
        }
    });

    // client.on('data', (data) => {
    //     console.log(data?.toString());
    // });


    client.on('error', (error) => {
        console.error('Connection error:', error);
        client.destroy();
    });

    client.on('close', () => {
        console.log('Connection closed');
    });
}

async function connectAll() {
    for (let i = 0; i < CONNECTIONS; i++) {
        await asyncSleep(2);
        connectAndSendData();
    }

}

connectAll();
console.log('All connections established and sending data in the background.');
