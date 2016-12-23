var express = require('express');
var authRouter = express.Router();
var auth = require(__dirname + '/modules/auth');

authRouter.get('/', function(req, res) {
  res.status(200).send('Login Page');
});

authRouter.get('/login', auth.authenticate('facebook'));

authRouter.get('/callback', auth.authenticate('facebook', { failureRedirect: '/'}), function(req, res) {
  res.redirect('/');
});

authRouter.get('/profile', function(req, res) {
  res.status(200).send(req.user);
});

module.exports = authRouter;
