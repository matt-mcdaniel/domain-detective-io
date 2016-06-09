const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app, filePath) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    // Enable Express to get dependency scripts
    app.use(express.static(path.join(__dirname, '..' + filePath)));
}