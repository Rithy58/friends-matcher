var auth = require('passport');
var Strategy = require('passport-facebook').Strategy;

auth.use(new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
}));

// TODO: reduce the size stored in sessions
auth.serializeUser(function(user, cb) {
  cb(null, user);
});
auth.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
// END

module.exports = auth;
