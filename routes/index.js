var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req, res) => {
  const year = new Date().getFullYear().toString();
  res.send({ year });
});

module.exports = router;
