var express = require('express');
var routes = require('./server/routes');
var bodyParser = require('body-parser');

var app = express();
var env = process.env.NODE_ENV || 'prod';

var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable Express to get dependency scripts
app.use(express.static(__dirname + '/public'));

// expose API
routes(app);

app.listen(port, (error) => {
    if (!error) {
        console.log('Listening on port ' + port + '. In ' + env + ' mode.');
    } else {
        console.error(error);
    }
});
