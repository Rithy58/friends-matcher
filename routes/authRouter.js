var express = require('express');
var authRouter = express.Router();
var auth = require('../modules/auth.js');
var user = require('../modules/user.js');

// IDEA: Redirect to home/login page?
authRouter.get('/', function(req, res) {
  res.status(200).send('Login Page');
});
// END

authRouter.get('/login', auth.authenticate('facebook'));
authRouter.get('/callback', auth.authenticate('facebook', { failureRedirect: '/'}), function(req, res) {
  // TODO: Redirect to profile?
  res.redirect('/');
  // END
});

// TODO: Check for existing profile?
authRouter.get('/profile', function(req, res) {
  if(req.user) {
    user.createUser(req.user.id, req.user.displayName);
    res.status(200).send(req.user);
  } else {
    res.status(404).send();
  }

});
// END

module.exports = authRouter;
