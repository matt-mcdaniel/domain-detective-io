var express = require('express');

var app = express();
var env = process.env.NODE_ENV || 'prod';
var urls = require('./data/write');

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Enable Express to get dependency scripts
app.use(express.static(__dirname + '/'));

app.listen(port, (error) => {
    if (!error) {
        console.log('Listening on port ' + port + '. In ' + env + ' mode.');
    } else {
        console.error(error);
    }
});