var connection = require ('./connection.js');

var orm = {

	selectAll : function(cb) {
		connection.query("SELECT * FROM burgers", function(error, result){
			if(error) {throw error}

			cb(result);
		});
	},
	insertOne : function(tableInput, newItemValues, cb) {
		var queryString = 'INSERT INTO ?? SET ?';

		connection.query(queryString, [tableInput, newItemValues], function(error, result){
			if(error) {throw error}

			cb(result);
		});
		//this may have to be structured differently 
		//once i know how we're getting data
		//for now, assume it's being sent as an object with key values

	},
	updateOne : function(tableInput, newValue, whatToSelect, cb) {
		var queryString ='UPDATE ?? SET ? WHERE ?';

		connection.query(queryString, [tableInput, newValue, whatToSelect], function(error, result) {
			if(error) {throw error}

			cb(result);
		});
	}
};

module.exports = orm;


/*In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
selectAll()
insertOne()
updateOne()
*/
