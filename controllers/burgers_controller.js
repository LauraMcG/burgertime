var express = require('express');
var burger = require('../models/burger.js');
var path = require('path');

//Create the router for the app, and export the router at the end of your file.

module.exports = function(app) {

	app.get('/', function(req, res) {

		burger.all(function(result) {
			res.render('index', {burgers:result});
		});
	});

	app.post('/', function(req, res) {
		burger.insert(req.body.burger, function(result){
			console.log(result);
			res.redirect("/");
		});
	});

	app.put('/:id', function(req, res) {
		burger.update(req.body.id, function(result) {

			res.redirect("/");
		});
	});
}

