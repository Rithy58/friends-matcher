var db = require('../modules/db.js');
var user = {};

// TODO: Create User Profile
user.createUser = function(id, displayName) {
  var database = db.getDatabase();
  database.collection('inserts').insertOne({fb_id: id, name: displayName});
};

// TODO: Delete User
user.deleteUser = function() {

};
// END

module.exports = user;
