var express = require('express');
var product = require('../model/product');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next)  => {
  var limit = req.param('limit');
  var page = req.param('page');
  var Prouct = product();
  var result = await Prouct.findAll({ attributes: ['name', 'price'] });
  res.json(result);
});

module.exports = router;
