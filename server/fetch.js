var fs = require('fs');
var fetch = require('isomorphic-fetch');
var _ = require('underscore');
var Promise = require('promise');
var $ = require('cheerio');

const popular = ['com', 'org', 'net', 'io'];

const fetchConfig = [
    [   
        // get new domains
        'https://www.orsn.org/en/tech/tld/',
        (body) => {
            var html = $(body).find('#tldinfo table td').text();
            
            return _.compact(html.split('.'))
                .map((d) => d.toLowerCase().split(' ')).reverse();
        }
    ],
    [
        // get rest of domains
        'http://data.iana.org/TLD/tlds-alpha-by-domain.txt',
        (body) => _.compact(
            body.split('\n')).map((d => [d.toLowerCase()])
        ).slice(1)
    ]
];

const fetchReduce = (urls) => {
    const popularNestedArr = popular.map((p) => [p]);
    
    return popularNestedArr
        .concat(urls[0], urls[1])
        .map((u) => {
            return {
                name: u[0],
                date: u[1] || null
            }
        })
}

function fetchText(url){
    return fetch(url[0])
        .then((res) => res.text())
        .then((text) => {
            var parser = url[1];
            return parser(text);
        })
        .catch((e) => {
            return console.warn('Could not load url: ', e);  
        });
}

Promise.all(fetchConfig.map(fetchText))
    .then((p) => {
        const reduced = fetchReduce(p);
        //console.log('reduced', reduced);
        
        write(reduced, true);
    });

function write(arr) {
    fs.writeFile('data/domains.json', JSON.stringify({ domains: arr }, null, 4), function(err) {
        if (err) return console.warn(err);
        
        console.log('write domains.json successful');
    });
}
