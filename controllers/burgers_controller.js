var express = require('express');
var burger = require('./models/burger.js');

//Create the router for the app, and export the router at the end of your file.

app.get('/', function(req, res) {
	res.render{'index'};
}