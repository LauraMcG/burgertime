var express = require('express');
var burger = require('../models/burger.js');
var path = require('path');

//Create the router for the app, and export the router at the end of your file.

module.exports = function(app) {

	app.get('/', function(req, res) {
		// res.render('index');

		burger.all(function(result) {
			res.render('index', {burgers:result});
			console.log(result);
		});
	});

	app.post('/', function(req, res) {
		burger.insert(req.body.burger, function(result){
			console.log(result);
			res.redirect("/");
		});
	});

		// connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [
		//     req.body.author, req.body.quote
		//   ], function(result) {

		//     }

	// 	burger.insert(req, function() {
	// 		console.log(res);
	// 		res.redirect("/");
	// 	});

	// });
}

