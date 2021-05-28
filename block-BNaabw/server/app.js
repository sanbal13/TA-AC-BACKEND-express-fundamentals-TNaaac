let PORT = 4000;
let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

// In-built Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Middleware to handle statis assets
app.use(express.static(__dirname + '/public'));

// Third Party Middlewares
app.use(logger('dev'));
app.use(cookieParser());

//Custom Middlewares


// Route Handler
app.get('/admin', (req, res, next) => {
    next('Unauthorized');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});
app.get('/users', (req, res) => {
    res.send("This is User Page")
});

// Error Handlers
app.use((req, res, next) => {
    res.send("Page not found");
});

app.use((err, req, res, next) => {
    res.send(err);
});

// listen function
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
})

