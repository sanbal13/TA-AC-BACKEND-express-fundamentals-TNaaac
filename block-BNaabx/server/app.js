let PORT = 4000;

let express = require("express");



let app = express();
// Middlewares
//clone of morgan logger
app.use((req, res, next) => {
    console.log(req.method, req.url, new Date());
    next();
});

// clone of express.JSON()
app.use((req, res, next) => {
    let store ='';
    req.on('data', (chunk) => {
        store += chunk;
    });
    req.on('end', () => {
        req.body = JSON.parse(store);
        console.log(req.body);
        res.send(JSON.stringify(req.body));
    });
    next();
});

//clone of express.static()
app.use((req, res, next) => {
    path =__dirname + '/public' + req.url;
    console.log(path);
    res.sendFile(path);
});

// listener
app.listen (PORT, () => {
    console.log('server is listening on port ' + PORT);
});