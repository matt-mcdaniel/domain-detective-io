const express = require('express');
const routes = require('./server/routes');
const config = require('./server/config');

const app = express();
const env = process.env.NODE_ENV || 'prod';

const port = 3000;

config(app, '/public');

routes(app);

app.listen(port, (error) => {
    if (!error) {
        console.log('Listening on port ' + port + '. In ' + env + ' mode.');
    } else {
        console.error(error);
    }
});
