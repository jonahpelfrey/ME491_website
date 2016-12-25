var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

//Connect to database instance
//mongoose.connect();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, './public/pages', 'index.html'));
});

var server = app.listen(8000, function() {
	console.log("Listening on port: " + server.address().port);
});
