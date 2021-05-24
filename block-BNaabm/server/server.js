let PORT = 4000;
let express = require('express');

let app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Middleware")
})


app.listen(PORT, () => {
    console.log("server is lstening on port " + PORT);
});