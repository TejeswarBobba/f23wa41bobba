var express = require('express');
var router = express.Router();
var x;

/* GET computations working. */
router.get('/', function(req, res, next) {
  if(req.query.x === undefined){
        x = Math.random(3);
  }else{
    x = req.query.x
  }

  imul = Math.imul(x);
  log = Math.log(x);
  log10 = Math.log10(x);

  res.send(`imul applied ${x} is ${imul}. Log applied to ${x} is ${log}. Log10 applied to ${x} is ${log10}.`);
});

module.exports = router;

