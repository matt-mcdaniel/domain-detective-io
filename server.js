var express = require('express');
var scrape = require('./api/scrape');

var app = express();
var env = process.env.NODE_ENV || 'prod';

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Enable Express to get dependency scripts
app.use(express.static(__dirname + '/'));

app.listen(port, function (error) {
    if (!error) {
        var url = 'https://www.orsn.org/en/tech/tld/';
        
        scrape.fetch(url);
        
        console.log('Listening on port ' + port + '. In ' + env + ' mode.');
    } else {
        console.error(error);
    }
});