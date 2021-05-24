let PORT = 8000;
let express = require('express');

let app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send("Welcome to the Assignment");
});

app.post('/json', (req, res) => {
    console.log(req.body);
});

app.post('/contact', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
});