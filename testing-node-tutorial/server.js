'use strict';

var app = require('./app');

var server = app.listen(process.env.PORT || 3000, function() {
	console.log('listening on port %d', process.env.PORT);
});