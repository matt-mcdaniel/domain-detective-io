var request = require('request');
var $ = require('cheerio');
var fs = require('fs');

module.exports = {
    fetch: function(url) {
        request(url, function(err, response, html) {
            if (err) return console.warn(err);
            
            var newDomains = $(html).find('#tldinfo table td').text();
            
            var arr = newDomains.split('.')
                .filter(function(v) { return v; })
                .map(function(v) { return v.split(' '); });
                
            fs.writeFile('data/domains.json', JSON.stringify({ domains: arr }, null, 4), function(err) {
                if (err) return console.warn(err);
                
                console.log('write domains.json successful');
            })
                
            console.log('DOM element: ', arr);
        });
    }
}