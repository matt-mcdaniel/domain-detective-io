var express = require('express');
var api = require('./server/api');
var bodyParser = require('body-parser');

var app = express();
var env = process.env.NODE_ENV || 'prod';

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Enable Express to get dependency scripts
app.use(express.static(__dirname + '/public'));

app.listen(port, (error) => {
    if (!error) {
        console.log('Listening on port ' + port + '. In ' + env + ' mode.');
        
        // expose API
        api(app);
        
    } else {
        console.error(error);
    }
});
