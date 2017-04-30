var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// var orm = require("./config/orm.js");

var connection = require('./config/connection.js');

console.log('server.js works');

console.log(connection);