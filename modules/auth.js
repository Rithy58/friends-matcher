var auth = require('passport');
var Strategy = require('passport-facebook').Strategy;

auth.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  }, function(_accessToken, refreshToken, profile, cb) {
    return cb(null, {
      id: profile.id,
      displayName: profile.displayName,
      accessToken: _accessToken
    });
}));

// REVIEW
auth.serializeUser(function(user, cb) {
  cb(null, user);
});
auth.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
// END

module.exports = auth;
