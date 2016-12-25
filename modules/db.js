var mongodb = require("mongodb");
var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
  if(err) {
    console.log(err);
    process.exit(1);
  }

  db = database;
});

module.exports = db;
