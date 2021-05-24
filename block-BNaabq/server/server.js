let PORT = 4000;
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();
app.use(logger('dev'));
app.use(cookieParser());
app.use('/about', (req, res, next) => {
   res.cookie('username', 'Santosh');  
   next()
});
app.use('/about', (req, res, next) => {
    console.log(req.cookies);
    next()
 });

 app.get('/about', (req, res) => {
     res.send("Welcome to the delicious world of cookies");
 })

app.listen(PORT, () => {
    console.log('server is listening on port  ' + PORT );
});