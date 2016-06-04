var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// database
var db = require('./db.js');

// server config
var port = process.env.PORT || 3000;
var app = express();

// create a write stream (in append mode) 
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

// middleware
app.use(morgan('combined', {stream: accessLogStream}))

//subrouters
app.use('/api', require('./routers/apiRoutes.js'));

console.log('app listening: ', port);
var server = app.listen(port);
