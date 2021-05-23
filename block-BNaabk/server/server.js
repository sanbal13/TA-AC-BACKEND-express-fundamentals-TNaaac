let PORT = 3000;
let express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Express");
});

app.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
});
