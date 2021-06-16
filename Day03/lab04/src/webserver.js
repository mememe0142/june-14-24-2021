const http = require('http');
const fs = require('fs');

const indexFile = __dirname + "/../public/index.html";
const port = 3000;

const processIndex = (req, res) => {
    if(req.url !== "/favicon.ico") {
        readIndexFile(res);
    }
};

const server = http.createServer(processIndex);

const readIndexFile = (res) => {
    fs.readFile(indexFile, (err, data) => {
        if (!err) {
            res.end(data.toString());
        } else {
            res.end("Error: File not found");
        }
    });
}

server.listen(port, () => {
    console.log("Server started and running in ", port);
});