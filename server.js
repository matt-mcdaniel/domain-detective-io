var express = require('express');
var scrape = require('./api/scrape');
var $ = require('cheerio');
var _ = require('underscore');

var app = express();
var env = process.env.NODE_ENV || 'prod';
var urls = require('./data/urls');

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Enable Express to get dependency scripts
app.use(express.static(__dirname + '/'));

app.listen(port, (error) => {
    if (!error) {
        
        scrape.fetch(urls);
        
        console.log('Listening on port ' + port + '. In ' + env + ' mode.');
    } else {
        console.error(error);
    }
});