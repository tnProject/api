const Sequelize = require('sequelize');
const dbconnection = require('./connection');

module.exports = dbconnection.getInstance().define('products', {
    product_id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    description: Sequelize.STRING,
    image_link: Sequelize.STRING
});


