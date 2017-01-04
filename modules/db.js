var mongodb = require("mongodb");
var _database;
var db = {};

db.init = function() {
  mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
    if(err) {
      console.log(err);
      throw Error('Cannot connect to database');
    }
    _database = database;
  });
};

db.getDatabase = function() {
  return _database;
};

module.exports = db;
