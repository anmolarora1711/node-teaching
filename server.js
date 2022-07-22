const express = require('express');

const routes = require('./routes');

const port = 8000;

const app = express();

app.use('/', routes);

app.listen(port);