var db = require('../modules/db.js');
var user = {};

user.createUser = function(id, displayName, accessToken) {
  var database = db.getDatabase();
  database.collection('users').updateOne({
    _id: id
  }, {
    _id: id,
    name: displayName,
    token: accessToken
  }, {
    upsert: true
  }, function(err, result) {
    if(err) {
      console.log(err);
    }
  });
};

user.updateToken = function(id, accessToken) {
  var database = db.getDatabase();
  database.collection('users').updateOne({
    _id: id
  }, {
    token: accessToken
  }, function(err, result) {
    if(err) {
      console.log(err);
    }
  });
};

user.findUser = function(id) {
  var database = db.getDatabase();
  database.collection('users').findOne({
    _id: id
  }, function(err, result) {
    if(err) {
      console.log(err);
    }
    return result;
  });
};

module.exports = user;
