var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res) {
  res.status(200).send('Hello World!');
});

module.exports = router;
