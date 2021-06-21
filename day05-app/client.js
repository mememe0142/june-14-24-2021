let express = require('express');
let app = express();
let fetch = require('node-fetch');

app.get('/weather/:city', (req, res) => {
    let url = `http://localhost:8080/temperature/${req.params.city}`;
    fetch(url)
        .then(response => response.text())
        .then(data => res.end(data))
        .catch(err => res.end(`Error fetching temperature of ${city}: ${err.message}`));
});

app.listen(8081, () => console.log("Client running in 8081 "));