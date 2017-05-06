var orm = require('../config/orm');
var connection = require('../config/connection');

var burger = {
	all: function(cb) {
		orm.selectAll(function(result) {
			// console.log(result);
			cb(result);
		});
	},
	insert: function(input, cb) {
		orm.insertOne('burgers', ['burger_name', 'devoured'], [input, false], function(result) {
				cb(result);
		});
	},

	update:	function(newValue, cb) {
		var updateValue = 'id = '+ newValue;
		orm.updateOne('burgers', 'devoured = true', updateValue, function(result) {
			cb(result);
		});
	}
}

/*
Also inside burger.js, create the code that 
will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.
*/

module.exports = burger;