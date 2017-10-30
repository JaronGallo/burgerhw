var orm = require("./../config/orm.js");

var model = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(vals, callback) {
    orm.insertOne("burgers", vals, callback);
  },
  update: function(id, callback) {
    orm.update("burgers", id, callback);
  }
};

module.exports = model;