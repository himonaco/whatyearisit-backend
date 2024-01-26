var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req, res) => {
  const date = new Date();
  res.send({ year: date.getFullYear() });
});

module.exports = router;
