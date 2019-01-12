const Sequelize = require('sequelize');
const dbconnection = require('./connection');


module.exports = function(){
    const Product = dbconnection.getInstance().define('product', {
        product_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        price: Sequelize.DECIMAL,
        description: Sequelize.STRING,
        image_link: Sequelize.STRING
    });

    return Product;
}



