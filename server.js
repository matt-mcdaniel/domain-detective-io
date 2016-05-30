var express = require('express');
//var api = require('./server/api');

var app = express();
var env = process.env.NODE_ENV || 'prod';

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});



// Enable Express to get dependency scripts
app.use(express.static(__dirname + '/public'));

app.listen(port, (error) => {
    if (!error) {
        console.log('Listening on port ' + port + '. In ' + env + ' mode.');
        
        //console.log(api);
        // expose API
        //var fetchApi = api(app);
        
        
        // Test Fetch
        //fetchApi.getUrl('https://api.godaddy.com/v1/domains/available?domain=example.guru');
        
    } else {
        console.error(error);
    }
});
