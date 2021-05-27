let PORT = 3000;
let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

// In-built Middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Third party Middlewaare
app.use(logger('dev'));
app.use(cookieParser());

// Custom Middleware
app.use((req, res, next) => {
    res.cookie('count', 1);
    next();
});

app.use(`/user/:username`, (req, res, next) => {
    var username = req.params.username;
    res.send(`<h1>${username}</h1>`);
});

//Route Handler
app.use('/admin', (req, res, next) => {
    next("Unauthorized");
});

app.get('/', (req, res) => {
    res.send('<h2> Welcome to express </h2>');
});

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
    res.json(req.body);
});

app.post('/json', (req, res) => {
    res.send(req.body);
});

// Error Handler Middlewares
app.use((req, res, next) => {
    res.setCode = 404;
    res.send("Page not Found");
})

app.use((err, req, res, next) => {
    res.setCode = 500;
    res.send(err);
});

// Listener
app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});


