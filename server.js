//DEPENDENCIES
var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var path = require('path');

var orm = require("./config/orm");


//setting up express server
var app = express();
var port = 3000;

//search for static content in public and serve it.
app.use(express.static(process.cwd() + '/public'));

// setting up body parser
app.use(bodyParser.urlencoded({ extended: false }));

//utilizing method ovveride to allow us to PUT and DELETE
app.use(methodOverride("_method"));

//settung up handlebars usage
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//linking the controller file for routing
var controller = require('./controllers/burgers_controller')(app);

//setting up the port to listen!
app.listen(port);
