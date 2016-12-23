var express = require('express');
var app = express();
app.use(require('express-session')(
  { secret: 'keyboard cat', resave: true, saveUninitialized: true }));
var auth = require(__dirname + '/modules/auth');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(session);
app.use(auth.initialize());
app.use(auth.session());

app.use('/auth', require(__dirname + '/routes/authRouter'));

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = server;
