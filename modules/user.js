var db = require('./db.js');

var user = {
  createUser: function(id, displayName) {
    db.collection('inserts').insertOne({fb_id: id, name: displayName});
  },
  deleteUser: function() {

  }
};

module.exports = user;
