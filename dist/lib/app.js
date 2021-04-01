"use strict";
var express = require('express');
var app = express();
app.use(express.json());
app.use('/api/v1/profiles', require('./controllers/profiles'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;
