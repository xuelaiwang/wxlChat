var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/aaa', function(req, res, next) {
  res.send({ title: 'Expssress' });
});

module.exports = router;
