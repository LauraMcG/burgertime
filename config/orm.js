var connection = require ('./connection.js');

var orm = {

	selectAll : function(cb) {
		connection.query("SELECT * FROM burgers", function(error, result){
			if(error) {throw error}

			cb(result);
		});
	},
	insertOne : function(table, columns, values, cb) {
		var queryString = 'INSERT INTO ?? (??) VALUES (?)';

		connection.query(queryString, [table, columns, values], function(error, result){
			if(error) {throw error}

			cb(result);
		});

	},
	updateOne : function(table, ColToUpdate, valToUpdate, colToSelect, ValToSelect, cb) {
		var queryString ='UPDATE ?? SET ?? = ? WHERE ?? = ?';

		connection.query(queryString, [table, ColToUpdate, valToUpdate, colToSelect, ValToSelect], function(error, result) {
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
