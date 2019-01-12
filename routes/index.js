var express = require('express');
var Prouct = require('../model/product');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  var limit = req.query.limit;
  var page = req.query.page;
  var result = await Prouct.findAll({ attributes: ['name', 'price'] });
  res.json({
    data: result
  });
});

module.exports = router;
