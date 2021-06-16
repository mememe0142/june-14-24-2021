const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/hello" && req.method === "GET") {
        res.end("Hello NodeJS");
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(9000, () => {
    console.log("Server started and running in 9000");
});