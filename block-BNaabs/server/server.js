let PORT = 4000;
let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

//In-built Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

// Third Party Middleware
app.use(logger('dev'));
app.use(cookieParser());

// User-defined Middleware

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
});
app.post('/new', (req, res) => {
    res.json(req.body);
});
app.get('/users/:username', (req, res) => {
    console.log(req.params.username);
    res.send(req.params.username);
})

app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});