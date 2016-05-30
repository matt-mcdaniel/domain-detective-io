var fetch = require('isomorphic-fetch');
var app = require('../server');

var request = {
  type: 'GET',
  headers: {
  },
  body: function(body) {
      console.log('body');
  }
};

module.exports = function(app) {
    return {
    
        getUrl: function(url) {
            
            //console.log(url);
            request.url = url;
            
            // Not on URL request
            fetch(url, JSON.stringify(request))
                .then((response) => {
                    if (response.status > 400) {
                        console.log('Error\n');
                        console.log(response.status);
                    }
                    res.send(response.status);
                })
                .catch((error) => {
                    console.log('error catch block', error);
                });
            
            
            // On URL request
            // app.get('/api', function(req, res) {
            //     fetch(url, JSON.stringify(request))
            //         .then((response) => {
            //             if (response.status > 400) {
            //                 console.log('Error\n');
            //                 console.log(response.status);
            //             }
            //             res.send(response.status);
            //         });
            // });
        }
    }
    
};