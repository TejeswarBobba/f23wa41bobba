var express = require('express');
var router = express.Router();
more = 0;
  sum = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more = more + 1
  sum = sum + more

  res.send(`sum is ${sum}`);
});

module.exports = router;
