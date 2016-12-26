var mongoose = require('mongoose');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/bloop-chat');

var ChatSchema = mongoose.Schema({
	created: Date,
	content: String,
	username: String,
	team: String
});

io.on('connection', function(socket) {
	console.log('New Connection');

	// var defaultTeam = 'general';
	// var teams = ["General", "Electrical", "Software"];

	// socket.emit('setup', {
	// 	teams: teams
	// });

	// socket.on('new user', function(data) {
	// 	data.team = defaultTeam;
	// 	socket.join(defaultTeam);
	// 	io.in(defaultTeam).emit('user joined', data);
	// });

	// socket.on('switch team', function(data) {
	// 	socket.leave(data.oldTeam);
	// 	socket.join(data.newTeam);
		
	// 	io.in(data.oldTeam).emit('user left', data);
	// 	io.in(data.newTeam).emit('user joined', data);
	// });

	// socket.on('new message', function(data) {

	// 	var newMsg = new Chat ({
	// 		username: data.username,
	// 		content: data.message,
	// 		team: data.team.toLowerCase(),
	// 		created: new Date()
	// 	});
	// 	newMsg.save(function(err, msg) {
	// 		io.in(msg.room).emit('message created', msg);
	// 	});
	// });
		
	socket.on('add-customer', function(customer) {
		io.emit('add-notify', {
			message: 'new customer',
			customer: customer
		});
	});

	socket.on('rem-customer', function(customer) {
		io.emit('rem-notify', {
			message: 'removing customer',
			customer: customer
		});
	});
});



var Chat = mongoose.model('Chat', ChatSchema);

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	if(req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.get('/', function(req, res) {
//	res.sendFile(path.join(__dirname, './public/pages', 'index.html'));
	res.sendfile('index.html');
});

// app.post('/setup', function(req, res) {
// 	var chatData = [{
// 		created: new Date(),
// 		content: 'Hi',
// 		username: 'Chris',
// 		team: 'software'
// 	}, {
// 		created: new Date(),
// 		content: 'Hello',
// 		username: 'Eric',
// 		team: 'electrical'
// 	}];

// 	for (var c = 0; c < chatData.length; c++) {
// 		var newChat = new Chat(chatData[c]);

// 		newChat.save(function(err, savedChat) {
// 			console.log(savedChat);
// 		});
// 	}
// 	res.send('created');
// });

// app.get('/msg', function(req, res) {

// 	Chat.find({
// 		'team': req.query.team.toLowerCase()
// 	}).exec(function(err, msgs) {
// 		res.json(msgs);
// 	});
// });

server.listen(8000, function() {
	console.log('Server running on port: 8000');
});
