var mongodb = require("mongodb");
var _database;
var db = {};

db.init = function() {
  mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
    if(err) {
      console.log(err);
      // TODO: Throw an error instead
      process.exit(1);
      // END
    }
    console.log('Database connected')
    _database = database;
  });
};

db.getDatabase = function() {
  return _database;
};

module.exports = db;
