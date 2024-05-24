const IP_ADDR = 'YOUR IP';
const UDP_PORT = 49161;

const dgram = require('dgram');
const udpserver = dgram.createSocket('udp4');

var name = " ";

// Error
udpserver.on('error', (err) => {
    console.log(`UDP server:\n${err.stack}`);
    udpserver.close();
});

// Message
udpserver.on('message', (msg, rinfo) => {
    if (name != msg) {
        name = msg;
        console.log(`Hello ${name}. How's it going?`);
    }
});

udpserver.bind(UDP_PORT);

console.log(`Started Listener!\n\nIP: ${IP_ADDR}\nPort: ${UDP_PORT}\n`);

// Send a run message to orca
udpserver.send('run', 0, 3, 49160, IP_ADDR);
