var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "TOOT!b00t!W00T!",
  database: "burgers_db"
});

connection.connect(function(error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
