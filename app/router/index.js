var express = require('express');
var router = express.Router();

var productController = require('../controller/ProductController');


/*products*/
router.get('/products', productController.getAll);
router.get('/products/:id', productController.getById);
router.post('/products', productController.create);
router.put('/products', productController.update);


module.exports = router;
