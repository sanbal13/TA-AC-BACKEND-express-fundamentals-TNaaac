let PORT = 3000;
let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

// In-built Middleware
app.use(express.json());
app.use(express.urlencoded({extended :false}));

// Third Party Middleware
app.use(logger('dev'));
app.use(cookieParser());

// Custom Middleware 

app.use((req, res, next) => {
     if(req.url === '/admin') {
         next('Unauthorized');
     }
     next();
});

// Route Handler
app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.use((req, res, next) => {
    res.send('Page not found')
});

app.use((err, req, res, next) => {
    res.status(500).send(err);
});

app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});
