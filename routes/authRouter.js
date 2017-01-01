var express = require('express');
var authRouter = express.Router();
var auth = require('../modules/auth.js');

// IDEA: Redirect to home/login page?
authRouter.get('/', function(req, res) {
  res.status(200).send('Auth API');
});
// END

authRouter.get('/web/login', auth.authenticate('facebook'));
authRouter.get('/web/callback', auth.authenticate('facebook', {
  failureRedirect: '/'
}), function(req, res) {
  res.redirect('/#/dashboard');
});

module.exports = authRouter;
