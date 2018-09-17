const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

function expressApp(database) {
    const app = express();

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use('/api', apiRouter(database));
}