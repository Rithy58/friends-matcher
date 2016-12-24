var auth = require('passport');
var Strategy = require('passport-facebook').Strategy;

auth.use(new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://matches.rithy58.com/auth/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

auth.serializeUser(function(user, cb) {
  cb(null, user);
});

auth.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = auth;
