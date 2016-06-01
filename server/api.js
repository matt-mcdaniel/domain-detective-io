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
    
    app.post('/api', function(clientRequest, clientResponse) {
        var domain = clientRequest.body.domain;
        var url = 'https://api.godaddy.com/v1/domains/available?domain=' + domain;
        
        console.log(url);
        
        requestHeaders.url = url;
        
        fetch(url, requestHeaders)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server', response.status);
                }
 
                return response.json();
            })
            .then((data) => {
                console.log(data);
                return clientResponse.send(JSON.stringify(data));
            })
    });
    
};