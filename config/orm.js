var connection = require("./connection.js");

var orm = {

  selectAll: function(tableName,callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  insertOne: function(tableName ,vals, callback) {
  
    var s = "INSERT INTO "+tableName+" (burger_name) VALUES (?)";

    connection.query(s, [vals], function(err, result) {
       if(err) throw err;
      callback(result);
    });
   
  },
  update: function(tableName, id, callback) {
    
    connection.query("UPDATE " +tableName+ " SET devoured=true WHERE id="+id+";",
     function(err, result) {
      if(err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;