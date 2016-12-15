var express = require('express');
var app = express();
var router = require('./router')

app.set('port', (process.env.PORT || 5000));
app.use(router);

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = server;
