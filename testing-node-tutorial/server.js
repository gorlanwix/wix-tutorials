'use strict';

var app = require('./app');

var server = app.listen(3000, function() {
	console.log('listening on port %d', server.address().port);
});