'use strict';

var express = require('express');
var app = express();
var http = require('http');
var parser = require('body-parser');
var myReverse = require('./modules');

app.use(express.static(__dirname + '/angular-tutorial/dist'));
app.use(parser());

app.get('/', function(req, res){
	res.send('Hello World');
});

app.post('/post', function(req, res) {
	console.log(req.body);
	res.send(myReverse(req.body.myinput));
});

// app.get('/index', function(req,res) {
// 	res.sendfile('index.html');
// });

module.exports = app;