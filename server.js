var express = require('express');
var app = express();
var session = require('express-session')(
  { secret: 'keyboard cat', resave: true, saveUninitialized: true });
var auth = require('./modules/auth.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static('./public/'));
app.use(session);
app.use(auth.initialize());
app.use(auth.session());

app.use('/auth', require('./routes/authRouter.js'));

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = server;
