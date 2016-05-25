var $ = require('cheerio');
var _ = require('underscore');

module.exports = [
    [   
        'https://www.orsn.org/en/tech/tld/', 
        (body) => {
            var html = $(body).find('#tldinfo table td').text();
            
            return _.compact(html.split('.'))
                .map((d) => d.toUpperCase().split(' '));
        }
    ],
    [
        'http://data.iana.org/TLD/tlds-alpha-by-domain.txt',
        (body) => _.compact(body.split('\n')).map((d => [d]))
    ]
];