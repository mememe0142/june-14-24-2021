const app = require('express')();
const expressWs = require('express-ws')(app);

app.ws('/', (ws) => {
    ws.send("connection established");
});

let echoWss = expressWs.getWss("/");
setInterval(() => {
    console.log("Total Clients", echoWss.clients.size);
    let sensex = (Math.random() * 600000);
    echoWss.clients.forEach(cl => {
        cl.send("Sensex: " + sensex);
    });
    
}, 2000);

app.listen(3000, () => console.log("server started in 3000"));