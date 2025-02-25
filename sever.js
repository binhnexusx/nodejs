const http = require('node:http'); //da cai dat node js roi

const hostname = '127.0.0.1'; // localhost
const port = 3000;  // where 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n thieej hok ba');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});