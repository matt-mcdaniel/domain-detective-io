var fetch = require('isomorphic-fetch');
var fs = require('fs');
var _ = require('underscore');
var Promise = require('promise');
var urls = require('./config');

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

Promise.all(urls.map(fetchText))
    .then((p) => {
        console.log(p);
        write(_.flatten(p, true));
    });

function write(arr) {
    fs.writeFile('data/domains.json', JSON.stringify({ domains: arr }, null, 4), function(err) {
        if (err) return console.warn(err);
        
        console.log('write domains.json successful');
    });
}
