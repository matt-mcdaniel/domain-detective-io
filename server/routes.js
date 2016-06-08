var fetch = require('isomorphic-fetch');
var key = require('./api_key');

var requestHeaders = {
  type: 'GET',
  headers: {
      'Authorization': 'sso-key ' + key,
      'Accept': 'application/json'
  }
};

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });
    
    // serve index.html on refresh
    app.route('/*').get(function(req, res) { 
        res.sendFile(__dirname + '/index.html');
    });
    
    app.post('/api', function(req, res) {
        console.log('body: ', req.body);
        var domain = req.body.domain;
        var url = 'https://api.godaddy.com/v1/domains/available?domain=' + domain;
        
        
        requestHeaders.url = url;
        
        console.log(url, req.body);
        
        fetch(url, requestHeaders)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server', response.status);
                }
 
                return response.json();
            })
            .then((data) => {
                return res.send(JSON.stringify(data));
            })
    });
    
};