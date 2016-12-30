var express = require('express');
var app = express();
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var auth = require('./modules/auth.js');
var db =  require('./modules/db.js');

var mongoDBStore = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'sessions'
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public/'));

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: mongoDBStore,
  resave: true,
  saveUninitialized: false
}));

app.use(auth.initialize());
app.use(auth.session());

// Routes
app.use('/auth', require('./routes/authRouter.js'));
// END

var server = app.listen(app.get('port'), function() {
  console.log('Server is running on port', app.get('port'));
  db.init();
});

module.exports = server;
