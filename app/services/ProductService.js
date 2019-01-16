const {Product} = require('../model/sequelize');
class ProductService {
    getById(productId) {
        return Product.findById(productId);
    }

    getAll(){
        return Product.findAll({ attributes: ['name', 'price', 'description', 'image_link'] });
    }

    create(product){
        return Product.create(product);
    }

    update(product){
        return Product.update(product, {where: {product_id: product.product_id}});
    }
}

module.exports = ProductService;