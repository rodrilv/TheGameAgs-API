const app = require('express')();

app.use('/games', require('./games/games'));

module.exports = app;