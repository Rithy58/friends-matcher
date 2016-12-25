var express = require('express');
var authRouter = express.Router();
var auth = require('../modules/auth.js');
var user = require('../modules/db.js');
var bodyParser = require('body-parser');

authRouter.get('/', function(req, res) {
  res.status(200).send('Login Page');
});

authRouter.get('/login', auth.authenticate('facebook'));

authRouter.get('/callback', auth.authenticate('facebook', { failureRedirect: '/'}), function(req, res) {
  res.redirect('/');
});

authRouter.get('/profile', bodyParser.json(), function(req, res) {
  //user.createUser();
  res.status(200).send(req.body);
});

module.exports = authRouter;
